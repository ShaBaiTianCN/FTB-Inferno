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
                event.player.tell('你觉得有一股黑暗力量注意到了你……')
                break
            case 'inferno:infernaldelights':
                event.player.stages.remove('easymobs')
                event.player.stages.remove('normalmobs')
                event.player.tell(
                    '你感觉到黑暗中燃烧的眼睛凝视着你的灵魂……'
                )
                break
            case 'inferno:infernalmastery':
                event.player.stages.remove('easymobs')
                event.player.stages.remove('normalmobs')
                event.player.stages.remove('hardmobs')
                event.player.tell(
                    '飞沙走石，天地色变。你唤醒了一些可怕的东西……'
                )
                break
            case 'inferno:eldritchtranscendence':
                event.player.stages.remove('easymobs')
                event.player.stages.remove('normalmobs')
                event.player.stages.remove('hardmobs')
                event.player.stages.remove('insanemobs')
                event.player.stages.add('overworld')
                event.player.tell(
                    '你已经解锁了穿越到你原本世界的力量，小心你身后的东西……'
                )
                event.player.tell(
                    '痛苦和绝望的尖叫声回荡数英里……\n自古以来，它在人类的噩梦中有很多名字，\n你很快就会知道它只是你的死亡……'
                )

                break
        }
    }
})
