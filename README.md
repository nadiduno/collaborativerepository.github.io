# collaborativerepository.github.io
Collaborative repository used for mentoring on how to teach how to resolve conflicts with merge in git

```bash

$ git init 
# Criando uma branch no repositório local (pc) 
$ git checkout -b feature-myname
# Modifica o README no local e comita
$ git add index.html
$ git commit -m 'Update INDEX'
$ git status
$ git push
# Aqui da um erro e recomenda fazer um push da nova branch
$ git push --set-upstream origin feature-feature-myname
$ git push
$ git checkout main
$ git merge feature-myname
$ git status
$ git push
# Aqui da o conflito, já que previamente tinhamos modificado o README no repositório remoto
$ git pull
$ git config pull.rebase false
$ git pull
# Aqui temos que tomar a decisão de que código conversar, e fazer o merge a mão
$ git add index.html
$ git commit -m 'Solve conflict INDEX'
$ git status
$ git push
```

By DevRel <💜 /> [Nadi Duno](https://www.linkedin.com/in/nadiduno/) | Embaixadora da [Toti Diversidade](https://totidiversidade.com.br/)  © 2023
<br />
<br />
[![Author](https://img.shields.io/badge/Dev-Nadi%20Duno-blueviolet%20)](https://portfolio-nadi.vercel.app/)
[![Social](https://img.shields.io/twitter/follow/nadiduno?label=%40nadiduno&style=social)](https://twitter.com/nadiduno)
[![Linkedin](https://img.shields.io/badge/in-Nadi%20Duno-blue)](https://www.linkedin.com/in/nadiduno/)
