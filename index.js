function getGitHubProfileInfos() {
    fetch('https://api.kanye.rest')
      .then(response => response.json())
      .then(data => {
        textRandom.textContent = data.quote
      })
} 
getGitHubProfileInfos()