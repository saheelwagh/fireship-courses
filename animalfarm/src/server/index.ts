import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())

import Chance from 'chance'
const chance = new Chance()

const animals = [...Array(250).keys()].map(id=>{
    return {
        id,
        type : chance.animal(),
        age : chance.age(),
        name : chance.name()
    }
})

app.get('',(req,res) => { 
    const q = req.query.q?.toString || ''
    const results = animals.filter(
        animal => {
            animal.type.toLowerCase().includes(q)
        }
    )
    res.send(results)
 })

 app.listen(8080, () => console.log('listening on 8080'))

//  https://github.com/fireship-io/react-course/tree/main/animalfarm