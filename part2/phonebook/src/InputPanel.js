const InputPanel = (props) => {
    return (
        <div>
        <h2>Phonebook</h2>
        <form>
          <div>
            <p>name: <input value={props.newName} onChange={props.handleNameChange} /></p>
            <p>number:<input value={props.newNumber} onChange={props.handleNumberChange} /></p> 
          </div>
          <div>
            <button type="submit" onClick={props.addPerson}>add</button>
          </div>
        </form>
        </div>
    )

}
export default InputPanel