import Layout from "../components/layout/Layout"
import Section from "../components/section/Section";

function Home(props){

    const education=[
        'Item1',
        'Item2',
        'Item3',
        'Item4'
    ]


    const experience=[
   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium cumque quaerat explicabo obcaecati voluptate. Consequatur ea nihil necessitatibus molestiae fugit accusamus praesentium ipsum. Qui numquam, excepturi quis quas quo illum.",
   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium cumque quaerat explicabo obcaecati voluptate. Consequatur ea nihil necessitatibus molestiae fugit accusamus praesentium ipsum. Qui numquam, excepturi quis quas quo illum.",
   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium cumque quaerat explicabo obcaecati voluptate. Consequatur ea nihil necessitatibus molestiae fugit accusamus praesentium ipsum. Qui numquam, excepturi quis quas quo illum."

    ]
    return(

<Layout>
    
<Section title="Education" items={education}/>

<Section title="experience" items={experience}/>
    
</Layout>
    )
}

export default Home;