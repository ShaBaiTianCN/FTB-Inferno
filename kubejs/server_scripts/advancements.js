onEvent('player.advancement',(event) => {
    //Get the advancement
    let ad = event.getAdvancement()

    /*
      
      'easymobs',
      'normalmobs',
      'hardmobs',
      'insanemobs'
     */
    if (ad) {
        switch (ad.toString()) {
            //check when the infernal advancements are awarded and set staging
            case 'inferno:infernalinsights':
                event.player.stages.remove('easymobs')
                event.player.tell('You feel a dark force has take notice of you...')
                break
            case 'inferno:infernaldelights':
                event.player.stages.remove('easymobs')
                event.player.stages.remove('normalmobs')
                event.player.tell(
                    'You feel burning eyes in the darkness peering into your soul...'
                )
                break
            case 'inferno:infernalmastery':
                event.player.stages.remove('easymobs')
                event.player.stages.remove('normalmobs')
                event.player.stages.remove('hardmobs')
                event.player.tell(
                    'The ground trembles and the skies darken. You have awoken something terrible...'
                )
                break
            case 'inferno:eldritchtranscendence':
                event.player.stages.remove('easymobs')
                event.player.stages.remove('normalmobs')
                event.player.stages.remove('hardmobs')
                event.player.stages.remove('insanemobs')
                event.player.stages.add('overworld')
                event.player.tell(
                    'You have unlocked the power to travel normally to your home world, beware what may yet follow you...'
                )
                event.player.tell(
                    'Screams of anguish and despair echo for miles...\nIt has had many names throughout the nightmares of mankind since the dawn of time,\n you will soon know it only as your demise...'
                )

                break
        }
    }
})
