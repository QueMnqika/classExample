import express from "express";
import { Person } from "./person.js"

const app = express()
const router = express.Router()
const port = +process.env.PORT || 4000

app.use(
    express.json(),
    router
)

router.get('^/$|/class', (req, res) => {
    res.json({
        status: res.statusCode,
        msg: 'Welcome on the Homepage'
    })
})

router.get('/person1', (req, res) => {
    let person1 = new Person()
    person1.FirstName = 'Que'
    person1.LastName = 'Mnqika'
    person1.Age = 24
    person1.display()
    res.end('Check console')
})

router.get('/person2', (req, res) => {
    let person2 = new Person()
    person2.FirstName = 'Joel'
    person2.LastName = 'Mukanya'
    person2.Age = 104
    person2.display()
    res.end('Check Console')
})

app.listen(port, ()=>{
    console.log('Running at http://localhost:' + port);
})