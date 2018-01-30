import React, {Component} from 'react'

class Signup extends Component {
    render() {
        return (
            <form method="post" action="/signup">
            <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" type="text" name="email" id="email" />
            </div>

            <div class="form-group">
                <label for="email">Password</label>
                <input class="form-control" type="password" name="password" id="password" />
            </div>

            <input class="btn btn-default" type="submit" />
            </form>
        )
    }
}

export default Signup