function App() {
    return (
      <div>
        <Tweet
          name="Charles Smith"
          username="theonlysmith"
          date={new Date().toDateString()}
          message="I am so tired right now."
        />
        <Tweet
          name="Raymond Castle"
          username="rc223"
          date={new Date().toDateString()}
          message="where do you find pinatas"
        />
        <Tweet
          name="Scoobert Doobert"
          username="meddlingmillenial"
          date={new Date().toDateString()}
          message="No, that's not where that belongs"
        />
      </div>
    );
  }