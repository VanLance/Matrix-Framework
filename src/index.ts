import { Canvas, Component } from './widget/index'
import { loginForm } from './form/userLoginForm'
import User from './form/types'

const canvas = new Canvas(document.body)

const component = new Component(canvas)
component.locationTop=2
component.locationLeft=1
component.content.innerText = 'Matrix'

canvas.addWidget(component)

const headerComponent = new Component(canvas)
headerComponent.content = document.createElement('h2')
headerComponent.content.innerText = 'TypeScript Rules'
headerComponent.locationLeft=8
headerComponent.locationTop=2
headerComponent.width = 4
canvas.addWidget(headerComponent)

const formComponent = new Component(canvas)
formComponent.locationLeft = 2
formComponent.locationTop = 4
formComponent.content = loginForm(createPostComponent)

canvas.addWidget(formComponent)

const postComponent = new Component(canvas)
async function createPostComponent(user : User):Promise<void>{
  postComponent.content.innerText = ''
  postComponent.locationLeft = 7
  postComponent.locationTop = 7
  postComponent.content.innerText = await getPost(user)
  canvas.addWidget(postComponent)
}

async function getPost({username,token}:User):Promise<string>{
  const res = await fetch(`https://matrix-116-fakebook.onrender.com/api/posts/${username}`,{
    method : "GET",
    headers : {
      'Content-Type':'application/json',
      'x-access-token': `Bearer ${token}`
    }
  })
  if(res.ok){
    const data = await res.json()
    console.log(data)
    const postIndex = Math.floor(Math.random() * data.length) - 1
    return data[postIndex].body
  }
  return ''
}