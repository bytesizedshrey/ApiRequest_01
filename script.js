const requestUrl = 'https://api.github.com/users/hiteshchoudhary'
const xhr = new XMLHttpRequest()
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){
    // console.log(xhr.readyState)
    if(xhr.readyState === 4){
        const data = JSON.parse(this.responseText)
        const followerCount = data.followers
        const followerCountElement = document.getElementById('followerCount')
        followerCountElement.innerText = `Hitesh has ${followerCount} followers!`
    }
}
xhr.send()

document.addEventListener('DOMContentLoaded', function(){
const imageElement = document.getElementById('avatarImage');
const imageUrl = 'https://avatars.githubusercontent.com/u/11613311?v=4'
imageElement.src = imageUrl;
});


