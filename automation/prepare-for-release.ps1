[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

function Validate-SecretsFile {
    if (!(Test-Path "$PSScriptRoot\$secretsFile")) {
        Write-Host "You need a valid CurseForge API Token in a $secretsFile file" -ForegroundColor Red
        Write-Host "Creating $secretsFile" -ForegroundColor Cyan
        New-Item -Path $PSScriptRoot -ItemType File -Name $secretsFile -Value "# To generate an API token go to: https://authors.curseforge.com/account/api-tokens `n $CURSEFORGE_TOKEN = `"your-curseforge-token-here`""
    }
}

. "$PSScriptRoot\settings.ps1"
. "$PSScriptRoot\secrets.ps1"

function Set-NeoForgeVersion {
    # Read the JSON content from the file
    $jsonContent = Get-Content -Path "$INSTANCE_ROOT/minecraftinstance.json" -Raw

    # Parse the JSON content
    $jsonObject = $jsonContent | ConvertFrom-Json

    # Extract the version number
    $version = $jsonObject.baseModLoader.forgeVersion

    # Extract the version part (excluding the beta part)
    $pureVersion = $version -replace '-beta', ''

    $paths = @("$PSScriptRoot/settings.cfg", "$INSTANCE_ROOT/server_files/server-setup-config.yaml")

    $paths | ForEach-Object {
        $contents = [System.IO.File]::ReadAllText($_) -replace "21.0.\d+", $pureVersion
        [System.IO.File]::WriteAllText($_, $contents)
    }
    
    return $pureVersion
}

function Set-BetterCompatibilityCheckerVersion {
    $configPath = "$INSTANCE_ROOT/config/bcc-common.toml"

    # Replace anything that matches semver of the type 1.0.0 with $MODPACK_VERSION
    $contents = [System.IO.File]::ReadAllText($configPath) -replace "\d+\.\d+\.\d+", $MODPACK_VERSION

    [System.IO.File]::WriteAllText($configPath, $contents)
}

function Close-FixedIssues {
    $base64Token = [System.Convert]::ToBase64String([char[]]$GITHUB_TOKEN);
    
    $headers = @{
        Authorization = 'Basic {0}' -f $base64Token
        Accept        = 'application/vnd.github.v3+json'
    }

    $body = @{
        labels = 'fixed in next release'
        state  = 'open'
    }
    
    $uri = "https://api.github.com/repos/$GITHUB_NAME/$GITHUB_REPOSITORY/issues"
    $issues = Invoke-RestMethod -Headers $Headers -Uri $Uri -Body $Body
  
    $body = @{
        state = "closed"
    } | ConvertTo-Json

    $issues | ForEach-Object {
        $issueNumber = $_.number
        Write-Host "Closing issue: " -NoNewline
        Write-Host "https://github.com/$GITHUB_NAME/$GITHUB_REPOSITORY/issues/$issueNumber" -ForegroundColor Blue 
        $Uri = "https://api.github.com/repos/$GITHUB_NAME/$GITHUB_REPOSITORY/issues/$issueNumber"

        Invoke-RestMethod -Headers $headers -Uri $uri -Body $body -Method Patch | Out-Null
    }

    Set-BetterCompatibilityCheckerVersion
    $modloaderVersion = Set-NeoForgeVersion

    Write-Host "-----"
    Write-Host
    Write-Host "### $CLIENT_FILE_DISPLAY_NAME"
    Write-Host 
    Write-Host "NeoForge-1.21.0-$modloaderVersion | [Mod Updates](https://github.com/EnigmaticaModpacks/$MODPACK_NAME/blob/master/changelogs/changelog_mods_$MODPACK_VERSION.md) | [Modlist](https://github.com/EnigmaticaModpacks/$MODPACK_NAME/blob/master/changelogs/modlist_$MODPACK_VERSION.md)"
    Write-Host 
    Write-Host "#### Added Mods"
    Write-Host
    Write-Host "#### Removed Mods"
    Write-Host
    Write-Host "#### Improvements"
    Write-Host
    Write-Host "#### Bugs Fixed"
    Write-Host
    $issues | ForEach-Object {
        $isBug = $_.labels | Where-Object { $_.name -eq "bug" }

        if ($isBug) {
            Write-Host "-   $($_.title) [(\#$($_.number))]($($_.html_url))" -ForegroundColor Green
        }
    }
    Write-Host
    Write-Host "---"

}
function Merge-DevelopIntoMasterPrompt {
    Write-Host "Please Merge Develop into Master, and then Master into Develop"
    pause
}

Validate-SecretsFile
Merge-DevelopIntoMasterPrompt
Close-FixedIssues