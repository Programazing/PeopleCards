const branchName = 'main'
const githubUsername = 'Programazing'
const githubProjectName = 'PeopleCards'
const jsonName = 'people.json'
let jsonURL = `https://raw.githubusercontent.com/${githubUsername}/${githubProjectName}/${branchName}/${jsonName}`

var fontAwesome = document.createElement('link')
fontAwesome.setAttribute('rel', 'stylesheet')
fontAwesome.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css')
fontAwesome.setAttribute('integrity','sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==')
fontAwesome.setAttribute('crossorigin','anonymous')
fontAwesome.setAttribute('referrerpolicy','no-referrer')
document.head.appendChild(fontAwesome)


window.onload = () => {
    fetch(jsonURL)
    .then(res => res.json())
    .then((json) => {
        generatePersonCard(json)
    }).catch(err => console.error(err));

    function generatePersonCard(results) {
        for(person of results.people){
            if (personIsEmpty(person) == false) {break}
            
            const card = document.createElement('div')
            card.setAttribute('class', 'card')
            document.body.append(card)

            const img = document.createElement('img')
            img.setAttribute('alt', 'Avatar')
            img.src = person.image

            const name = document.createElement('h1')
            name.append(person.name)

            const title = document.createElement('p')
            title.setAttribute('class', 'title')
            title.append(person.title)

            const description = document.createElement('p')
            description.append(person.description)

            const link = document.createElement('a')
            link.setAttribute('target', '_blank')
            link.setAttribute('class', 'fa-brands fa-dribbble')
            link.href = person.url

            const twitter = document.createElement('a')
            twitter.setAttribute('target', '_blank')
            twitter.setAttribute('class', 'fa-brands fa-twitter')
            twitter.href = person.twitter

            const buttonLink = document.createElement('a')
            buttonLink.setAttribute('target', '_blank')
            buttonLink.href = person.contact
            const contactButton = document.createElement('button')
            contactButton.append('Contact')
            buttonLink.appendChild(contactButton)


            card.appendChild(img)
            card.appendChild(name)
            card.appendChild(title)
            card.appendChild(description)      
            if(person.link != ''){card.appendChild(link)}
            if(person.twitter != ''){card.appendChild(twitter)}

            const socialLinkSeparator = document.createElement('p')
            card.appendChild(socialLinkSeparator)
            card.appendChild(buttonLink)
        }  
    }

    function personIsEmpty(person){
        if(person == undefined){return false}
        return true
    }
}