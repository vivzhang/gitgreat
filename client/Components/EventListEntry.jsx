//Child component within EventList (contained within HomepageApp)
var EventListEntry = (props) => (
  <div className="listEntry" onClick={() => props.handleEntryClick(props.event)}>
    <strong>{props.event.name}</strong><br />
    Location: {props.event.where}<br />
    Time: {props.event.when}<br />
  </div>
);

window.EventListEntry = EventListEntry;