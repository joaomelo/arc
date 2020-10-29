# Command

Is a function that run business logic sync or async and maybe return a string.

    const commandExample = (payload, dep) => {
      //do this
      //do that
    }

Commands receive two objects as inputs. The first is a payload with bussiness data needed to execite the logic.

The second is dep objects with stack dependencies like:
- dispatch: to be able to update redux app state.
- request: to interact with the server.

This depedenci injection make commands easier to test in diferent enviroments.

Commands will validate input, make fetchts to the server, dispatch sync actions to the store. If something deviate from the expected happy path the command should raise exceptions to represent failure.

Commands can return anything. But the falsehood of the return value will affect hook, more about that bellow.

# Use Command

Use command is a usefull hook to integrate commands to react.

    const myComponent = props => {
        { command, cancel, error, pending, success } = useCommand(someCommand)
            
        if (pending) return <p>Loading</p>
        if (error) return <p>{error}</p>
        if (success) <p>Yeah: {success}</p>

        return <button onClick={command(props.payload)}>
    }

The hook receives the actual command to be run.

It returns an object with a wrapper command function and efemeral state variables that can reactive used in the component: error, success, pending.

Error, pending and success will represent the state of the last wrapper call. Error will contain the message property inside any error thrown inside the actual command execution. 

Success will hold the eventual returned value by the command or a default true value if a falsy (probably undefined if nothig) was returned by the command. Success is a usefull mechanism to reactive hold string messages informing the conclusion of a command.

Those three state variables will be reset in each possible subsequent call to command. More about command bellow.

Todo --- The wrapper command function only needs the payload to run. Dependencies will be injected by the hook. The hook grab dependencies from react useContext named command. It auto grabs Redux dispatch if available.

Subsequent calls to command will be ignored if the last one is still pending. So they will have no effect.

Todo --- Cancel function will cancel the last command even before executon termination. --- Probably will need to return the cancel from command?