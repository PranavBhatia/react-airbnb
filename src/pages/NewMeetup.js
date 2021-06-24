import NewMeeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupsPage(props) {
  function addMeetupHandler(meetupData) {
    //https://react-airbnb-31628-default-rtdb.firebaseio.com/
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupsPage;
