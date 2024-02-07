let results = document.querySelector(".quotes_output")
let copy = document.querySelector(".classs")

let btn = document.querySelector(".submit")
let rest = document.querySelector(".reset")

let allquotes = [
    {
        quotess : "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        names : "Nelson Mandela"
    },
    {
        quotess : "The way to get started is to quit talking and begin doing. -Walt Disney",
        names : "Walt Disney"
    },
    {
        quotess : "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.  -Steve Jobs",
        names : "Steve Jobs"
    },
    {
        quotess : "The future belongs to those who believe in the beauty of their dreams.  -Eleanor Roosevelt",
        names : "Eleanor Roosevelt"
    },
    {
        quotess : "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -Oprah Winfrey",
        names : "Oprah Winfrey"
    },
    {
        quotess : "The emotion that can break your heart is sometimes the very one that heals it. - Nicholas Sparks",
        names : "Nicholas Sparks"
    },
    {
        quotess : "The saddest thing about love is that not only that it cannot last forever, but that heartbreak is soon forgotten. - William Faulkner",
        names : "William Faulkner"
    },
    {
        quotess : "The cure for a broken heart is simple, my lady. A hot bath and a good night’s sleep. -Margaret George",
        names : "Margaret George"
    },
    {
        quotess : "Sometimes good things fall apart so better things can fall together. - Marilyn Monroe",
        names : "Marilyn Monroe"
    },
    {
        quotess : "The heart was made to be broken. - Oscar Wilde",
        names : "Oscar Wilde"
    },
    {
        quotess : "The heart was made to be broken. - Oscar Wilde",
        names : "Oscar Wilde"
    },
    {
        quotess : "The greatest pain that comes from love is loving someone you can never have. - Unknown",
        names : "Unknown"
    },
    {
        quotess : "The only way to heal a broken heart is time. - Unknown",
        names : "Unknown"
    },
    {
        quotess : "Hearts will never be practical until they are made unbreakable. - Unknown",
        names : "Unknown"
    },
    {
        quotess : "Don’t cry when the sun is gone, because the tears won’t let you see the stars. - Violeta Parra",
        names : "Violeta Parra"
    },
    {
        quotess : "The emotion that can break your heart is sometimes the very one that heals it. - Nicholas Sparks",
        names : "Nicholas Sparks"
    },
    {
        quotess : "If You Ever Fall In Love With bitches, just leave Her And Find New One. - Nahian Rafi",
        names : "Nahian"
    },
    {
        quotess : "Life Is Not PlayBoy ('Jibon Kono CheleKHela Noy'). - Nahian Rafi",
        names : "Nahian"
    },
]

btn.addEventListener("click", function(){
    let randomnum = Math.floor(Math.random() * allquotes.length)
    // console.log();
    // console.log(allquotes[randomnum].names);
    results.value = allquotes[randomnum].quotess
    // results.value = allquotes[randomnum].names
})
copy.addEventListener("click", function(){
    results.select();
    results.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(results.value)
})

rest.addEventListener("click", function(){
    results.value = ""
})