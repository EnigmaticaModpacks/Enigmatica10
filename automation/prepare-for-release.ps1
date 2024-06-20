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

function Get-ModloaderVersion {
    # Define the path to your YAML file
    $settingsPath = "$PSScriptRoot\settings.cfg"

    # Load the YAML content from the file
    $fileContent = Get-Content -Path $settingsPath -Raw

    # Use regex to extract the loaderVersion
    if ($fileContent -match "FORGEVER=\s*([^\s]+)") {
        $loaderVersion = $matches[1] -replace ";"
        Write-Output "loaderVersion: $loaderVersion"
        return $loaderVersion
    }
    else {
        throw "loaderVersion not found."
    }
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

    $modloaderVersion = Get-ModloaderVersion

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
            Write-Host "* $($_.title) [(\#$($_.number))]($($_.html_url))" -ForegroundColor Green
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