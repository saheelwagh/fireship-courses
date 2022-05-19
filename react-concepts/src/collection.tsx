const data = [
    { id: 1, name: 'Fido 🐕' },
    { id: 2, name: 'Snowball 🐈' },
    { id: 3, name: 'Murph 🐈‍⬛' },
    { id: 4, name: 'Zelda 🐈' },
  ];

  function ListOfAnimals() {
      return(
          <>
          <ul>
              {
                  data && //only render if there is data
                  data.map(({id,name}) =>{
                      return <li key={id}>{name}</li>
                  })
              }
          </ul>
          //events
        <button
        onClick={(e => console.log(e))}
        >Click</button>
        </>
      )
  }

  export default ListOfAnimals