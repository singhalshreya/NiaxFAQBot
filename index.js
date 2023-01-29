require('dotenv').config();
const Telegraf = require('telegraf');
const axios = require('axios');

const bot = new Telegraf(process.env.TOKEN);

bot.command('start', ctx=> {
    sendStartMessage(ctx);
})

bot.action('start', ctx =>{
    // ctx.deleteMessage(hello);
    sendStartMessage(ctx);   
})

function sendStartMessage(ctx){
    let startMessage = 'Heyy! I am Niax - FAQ bot:) \nHow can I help you?'
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'HELP', callback_data: 'help'},
                        { text: 'LANGUAGE',callback_data: 'language'}                         
                    ],
                    [
                        { text: 'HACKATHON', callback_data: 'hackinfo'},  
                        { text: 'REGISTRATION', callback_data: 'registration'}             
                    ],
                    [
                        { text: 'FAQ', callback_data: 'faq'}
                    ]    
                ]            
            }
        })
}

bot.action('hstart', ctx =>{
    // ctx.deleteMessage();
    sendHStartMessage(ctx);   
})


function sendHStartMessage(ctx){
    let startMessage = 'नमस्कार!! मैं NiaxFAQBot हूं:) \nमैं आपकी कैसे मदद कर सकता हूं?'
    bot.telegram.sendMessage(ctx.chat.id, startMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'मदद', callback_data: 'help'},
                        { text: 'भाषा',callback_data: 'language'}                         
                    ],
                    [
                        { text: 'आयोजित हैकथॉन', callback_data: 'hackinfo'},  
                        { text: 'पंजीकरण', callback_data: 'registration'}             
                    ],
                    [
                        { text: 'सामान्य प्रशन', callback_data: 'faq'}
                    ]    
                ]            
            }
        })
}

const helpMessage = `
Say something to mention
/start - start the bot
/help - command reference
/fortune - fortune cookie
`;

function help(ctx){
    ctx.reply(helpMessage);
}    

bot.action('hackinfo', ctx => {
    let hackMessage = "ABOUT THE HACKATHON \nCASTOR, the latter chapter, will be a 48-hour remarkable event with a vision of upskilling students through events of different technical and entrepreneurial domains, connecting with various tech leaders and inspiring individuals, and providing a platform for a comprehensive exchange of innovation."
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Problem Statements', callback_data: 'ps'}
                    ],
                    [
                        { text: 'Rules', callback_data: 'rules'},                   
                        { text: 'Mode', callback_data: 'loc'},
                        { text: 'Prizes', callback_data: 'prizes'}
                    ],
                    [
                        
                        { text: 'Hackathon Theme', callback_data: 'hacktheme'},
                        { text: 'Registration Cost', callback_data: 'regcost'}
                    ],
                    [
                        { text: 'Resources', callback_data: 'resources'/* url:'https://www.youtube.com/watch?v=Lt-MY9LQLv0&list=PLX2ojSA27XYhIopdU2RRQIMe7gfwcKL84&index=66&ab_channel=TutorialWeekly' */},
                        { text: 'Search Devfolio', url:'https://devfolio.co/hackathons'}
                        
                    ],
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]
                    
                ]
            }
        })
})

bot.action('language', ctx => {
  
    let hackMessage = "Choose your preferred language."
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                        [
                            { text: 'English', callback_data: 'start' },
                            { text: 'Hindi', callback_data: 'hstart' },                         
                        ],
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('rules', ctx => {
  
    let hackMessage = "Visit here for the code of conduct of the hackathon - https://devfolio.co/code-of-conduct"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('hacktheme', ctx => {
  
    let hackMessage = "Innovate with purpose - hack for a sustainable and efficient future. \nJoin us by developing a ChatBot."
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})


bot.action('resources', ctx => {
  
    let hackMessage = "Replit Resources: \n1. https://youtu.be/vrEtQ3nEVAc \n2. https://youtu.be/YqwEWAXIGR0 \n3. https://youtu.be/QJR8WHDYWZo"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })

})

bot.command('fortune', (ctx) => {
    axios.get('http://yerkee.com/api/fortune')
        .then(res => {
            console.log(res.data.fortune);
            ctx.reply(res.data.fortune)
        }).catch(e => {
            console.log(e);
        })

})


bot.action('regcost', ctx => {
    
    let hackMessage = "Don't break the bank, join us for free!"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('loc', ctx => {
    
    let hackMessage = "This hackathon will be conducted in online mode."
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('prizes', ctx => {
    
    let hackMessage = "PRIZE POOL - $1,500 \nPARTNERS:\nPolygon $350 \nFilecoin $250 \nReplit $50 \nSolana $850 \n\nYou can also visit the site - https://castor23.netlify.app/#prizes"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.action('ps', ctx => {
    // ctx.answerCbQuery();
    bot.telegram.sendMessage(ctx.chat.id, 'Select your batch.',
        {
            reply_markup: {
                keyboard: [
                    [
                        {text: "2023/2024/2025"},
                        {text: "2026"}
                    ],
                    [
                        {text: "Remove Keyboard"}  
                    ]
                ],
                resize_keyboard: true,
                one_time_keyboard:true
                            
            }
        })
      
    })


bot.hears('2023/2024/2025', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'Bot Development Problem Statements: \n1. Build an Order Booking Bot \n2. Buils a FAQ bot for Student-led Hackathon \n3. Build a Language Leaning Bot \n4. Build a Job Search Bot \n\nBot Development can be done in Python, Javascript but has to be coded.',
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
   
})

bot.hears('2026', ctx => {
    bot.telegram.sendMessage(ctx.chat.id, 'For the 2026 batch, there is a no code track. \n1. [No Code Chrome Extension] Manage your College Life like a Pro \n2. [No Code Web App] create a Web app for Society Recruitments of IGDTUW \n3. [No Code Survey Bot] Build a Survey Bot for Faculty Feedback for IGDTUW Faculty',
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]                    
                ]
            }
        })
})

bot.hears('Remove Keyboard', ctx => {
    
    bot.telegram.sendMessage(ctx.chat.id, 'Removed Keyboard.',
        {
            reply_markup: {
                remove_keyboard: true
            }
        })
        ctx.reply("Enter /start.");
})

bot.action('registration', ctx => {
    let hackMessage = "REGISTRATION DETAILS"
    
    bot.telegram.sendMessage(ctx.chat.id, hackMessage,
        {
            reply_markup: {
                inline_keyboard: [
                    [
                        { text: 'Deadline', callback_data: 'dead'},
                        { text: 'Reminder', callback_data: 'rem'}
                    ],
                    [
                        {text: 'Requirements', callback_data:'req'}
                    ],                 
                    [
                        { text: 'Back to INTRO', callback_data: 'start' },                        
                    ]
                    
                ]
            }
        }) 
    })   

    bot.on("Ishika Pandey",ctx=>{
        //"Event of the text"
          
          ctx.reply("Thanks Ishika, Can you share your email-id?")  //context function reply the message
          
        })
        bot.on("ishika123@gmail.com",ctx=>{
          
          ctx.reply("Ishika please share your teamname."); //context function reply the message
          
        }) 
        bot.on("Unbound",ctx=>{
          
            ctx.reply("Thanks for the details."); //context function reply the message
            bot.telegram.sendMessage(ctx.chat.id, hackMessage,
                {
                    reply_markup: {
                        keyboard: [
                            [
                                {text: "Register Now"}
                            ],
                            [
                                {text: "Remove Keyboard"}  
                            ]
                        ],
                        resize_keyboard: true,
                        one_time_keyboard:true
                                    
                    }
                })
              
            })
          
        

bot.action('req', ctx => {
        let hackMessage = "Requirements for registration: \n1. Name  \n2. Email-Id  \n3. Phone Number - Enter 'phone' \n4. Team name "
        ctx.reply("To continue the registartion process, enter 'REGISTER NOW'.");
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
          
        })

bot.hears('Register Now', ctx => {
    ctx.reply('Check out the link below: \nhttps://castor-2023.devfolio.co/');                
        })

bot.hears('Remove Keyboard', ctx => {
    
        bot.telegram.sendMessage(ctx.chat.id, 'Removed Keyboard.',
            {
                reply_markup: {
                    remove_keyboard: true
                }
            })
            ctx.reply("Enter /start.");
    })

bot.action('dead', ctx => {
    
        let hackMessage = 'The registration deadline for this hackthon is 27 Jan 2023, 10PM. Hurry up and register for this opportunity!!!'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

let sendInterval;
bot.hears(/\/setreminder|\/stop/, (ctx) => {
  if (sendInterval) {
    clearInterval(sendInterval);
  }

  if (/\/setreminder/.test(ctx.update.message.text)) {
    sendInterval = setInterval(() => {
      ctx.reply('HACKATHON ON 31st Jan,2023!! \nSUBMIT YOUR PROJECT!!!');
    }, 600);
  } else if (/\/stop/.test(ctx.update.message.text)) {
    ctx.reply('ALLLLL THE BESTTT!!');
    ctx.reply("Enter '/start' command to go back.");
  }
});

bot.action('rem', ctx => {
    
        let hackMessage = "Should I set a reminder for you?? \nEnter '/send' to set reminder. \nEnter '/stop' to stop the reminder."
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })
        
bot.action('help', ctx => {
    
        help(ctx)
    })

    bot.action('faq', ctx => {
        let faqMessage = 'HAVE FURTHER QUESTIONS?? DONT WORRY'
        
        bot.telegram.sendMessage(ctx.chat.id, faqMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'TEAM SIZE', callback_data: 'ts'},
                            { text: 'TIMELINE', callback_data: 'timeline'},
                            { text: 'CONTACT', callback_data: 'contact'}                           
                        ],
                        [
                            { text: 'WHO CAN PARTICIPATE', callback_data: 'wcp'}                            
                        ]
                        
                    ]
                }
            })
    })
bot.hears('phone', (ctx) => {
        // console.log(ctx.from)
        bot.telegram.sendMessage(ctx.chat.id, 'Can we get access to your phone number?', requestPhoneKeyboard);
    
    })



const requestPhoneKeyboard = {
        reply_markup: {
            keyboard: [
                [{
                    text: "Phone Number",
                    request_contact: true,
                    one_time_keyboard: true
                }],
                [
                    {text: "Remove Keyboard"} 
                ]
               
            ],
            resize_keyboard: true,
            one_time_keyboard:true
        }
    };
    

    bot.action('ts', ctx => {
    
        let hackMessage = '1-4 members'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

    bot.action('wcp', ctx => {
    
        let hackMessage = 'Open to all, big ideas welcome - hack with us!'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

    bot.action('timeline', ctx => {
    
        let hackMessage = "Registration starts - 9 Jan 2023, 8PM \nRegistration ends 27 Jan 2023, 3PM \nHackathon starts - 28 Jan 2023, 12AM \nHackathon ends - 29 Jan 2023, 10AM \nResults announced 29 Jan 2023 8PM"
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })

    bot.action('contact', ctx => {
    
        let hackMessage = 'Connect with us!'
        
        bot.telegram.sendMessage(ctx.chat.id, hackMessage,
            {
                reply_markup: {
                    inline_keyboard: [
                        [
                            { text: 'Insta', url:'https://www.youtube.com/watch?v=Lt-MY9LQLv0&list=PLX2ojSA27XYhIopdU2RRQIMe7gfwcKL84&index=66&ab_channel=TutorialWeekly' },                        
                        ],
                        [
                            { text: 'Phone No: 9823138917', callback_data: 'no' },                        
                        ],
                        [
                            { text: 'Email-id: cb@igdtuw.ac.in', callback_data: 'id' },                        
                        ], 
                        [
                            { text: 'Back to INTRO', callback_data: 'start' },                        
                        ]                    
                    ]
                }
            })
    })
        
   


bot.launch();
