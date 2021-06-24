import NewMeeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(props) {
  function addMeetupHandler(meetupData) {
    debugger;
    fetch(
      "https://react-airbnb-31628-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
