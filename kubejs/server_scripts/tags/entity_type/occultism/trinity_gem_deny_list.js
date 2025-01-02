ServerEvents.tags('entity_type', (event) => {
    event.get('occultism:trinity_gem_deny_list').add(['#occultism:soul_gem_deny_list']);
});
