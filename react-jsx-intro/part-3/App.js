function App() {
    return (
      <div>
        <Person 
            name="Pete"
            age={21}
            hobbies={["self-loating", "eating tacos", "bird watching"]} />

        <Person 
            name="Tyler" 
            age={20} 
            hobbies={["streaming", "not eating"]} />

        <Person
            name="Siobhan"
            age={17}
            hobbies={["looking down at their shoes", "eating tapioca", "whistling"]} />
      </div>
    );
  }