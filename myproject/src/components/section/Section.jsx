function Section({title,items}){


    const ItemArray=items.map((item,index)=><li key={index}>{item}</li>)

   
    return(
        
        <section>

        <h1>{title}</h1>
      <ul>
        {ItemArray}
      </ul>
    </section>
   
    
    )
}

export default Section;