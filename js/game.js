// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {//-
   // music: "98_Lost_Mine.mp3",
    background_image: "randomhighschool.jpg",
    levels: {//--

        start: {//---
            message: "You are in high school",
            choices: [
                {
                    text: "stay and behave",
                    nextLevel: "good",
                },

                {
                    text: "misbehavior",
                    nextLevel: "bad",
                },
            ]
        },//---

        good: {//---
            background_image: "Graduation.jpg",
            //music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "you get good grades! time to choose your next step",
            choices: [
                {
                    text: "go to college",
                    nextLevel: "coll",
                },
                
               {   text: "wait a little",
                    nextLevel: "skip",
                }
            ]
        },//---

        bad: {//---
            message: "you got expelled...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },//---
        
        coll: {//---
            background_image: "students-in-dorm.jpg",
            
            message: "doing well but what will you do?",
            choices: [
                {
                    text: "slack off",
                    nextLevel:"bad",
                },
                {
                    text: "continue to work hard",
                    nextLevel: "degree",
                },
            ]
        
        },//---
        
        skip: {//---
           message: "you took some time for yourself, but now you need to do something.",
          choices: [
               {
                   text: "wait more and have fun",
                    nextLevel: "lose",
                 },
                {
                    text: "get a job",
                    nextLevel: "job",
                },
                {
                    text: "go to college",
                    nextLevel: "coll",
                }
            ]
        },//---
        
        degree: {
            message: "you got your degree in whatever...",
            choices: [
                {
                    text: "get a job",
                    nextLevel: "job",
                },
                {
                    text: "wait a little",
                    nextLevel: "wait"
                },
                {
                    text: "go back to college",
                    nextLevel: "back",
                }
            ]
        },
        
         wait: {//---
           message: "you took some time for yourself, but now you need to do something.",
          choices: [
               {
                   text: "wait more and have fun",
                    nextLevel: "lose",
                 },
                {
                    text: "get a job",
                    nextLevel: "job",
                },
                {
                    text: "go back to college",
                    nextLevel: "coll",
                }
            ]
        },//---
        
        job: {
            message: "you were actually able to get a job",
            choices: [
                {
                    text: "continue getting money",
                    nextLevel: "cont"
                },   
                {
                    text: "get a life(while keeping your job)",
                    nextLevel: "life",
                }
                ]
        },
        
        lose: {
            message: "you are almost out of money and and no education.",
            choices: [
                {
                    text: "just start over",
                    nextLevel: "start",
                },
                {
                   text: "go to college",
                   nextLevel: "back",
                }
                ]
        },
        
        back: {
            message: "you got another degree. you seriously need to get money now.",
            choices: [
                {
                text: "get a job",
                nextLevel: "job",
                },
                {
                    text: "relax a little",
                    nextLevel: "wait",
                }
                ]
        },
        cont: {
            message: "you are now thriving in your job. You need to actually get a life other than this",
            choices: [
                {
                    text: "get a life outside of your job",
                    nextLevel:"life",
                }
                ]
        },
        life: {
            message: "you found a significant other, started a family, financially stable....or whatever",
            choices: [
                {
                    text: "the game is over. you could just quit or start over",
                    nextLevel: "start",
                }]
        }
        
     }//--
};//-
