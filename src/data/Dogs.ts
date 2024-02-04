import { Dog } from "./Dog";
import orange_dog from '../../assets/images/orange_dog.png'

import blue_dog from '../../assets/images/blue_dog.png'
import red_dog from '../../assets/images/red_dog.png'
import white_dog from '../../assets/images/white_dog.png'
import yellow_dog from '../../assets/images/yellow_dog.png'


const dogs: Dog[] = [
    {
        id: 0,
        name: "Hachiko",
        age: 3.5,
        gender: "Male",
        color: "Brown",
        weight: 12.9,
        location: "389m away",
        image:  orange_dog,
        //'../../assets/images/orange_dog.jog',
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    },
    {
        id: 1,
        name: "Shelby",
        age: 3.5,
        gender: "Female",
        color: "Choco",
        weight: 14.9,
        location: "982m away",
        image: white_dog,
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    },
    {
        id: 2,
        name: "Cyrus",
        age: 3.5,
        gender: "Male",
        color: "Black",
        weight: 8.2,
        location: "672m away",
        image: yellow_dog,
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    },
    {
        id: 3,
        name: "Miss Agnes",
        age: 3.5,
        gender: "Female",
        color: "White",
        weight: 9.6,
        location: "879m away",
        image:red_dog,
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    },
    {
        id: 4,
        name: "Skooby Doo",
        age: 3.5,
        gender: "Male",
        color: "Gold",
        weight: 12.4,
        location: "412 away",
        image: blue_dog,
        about: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
    }
]

export default dogs


