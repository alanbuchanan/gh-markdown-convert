const LeftPanel = (props) => ({
    render: function () {
        const {str, handleChange} = this.props
        return (
            <textarea className="col-md-6" name="txt" value={str} onChange={handleChange} cols="30" rows="20"></textarea>
        )
    }
})

const RightPanel = (props) => ({
    render: function () {
        const {str} = this.props
        return (
            <div className="col-md-6" dangerouslySetInnerHTML={{__html: marked(str)}}></div>
        )
    }
})

const Main = React.createClass({
    getInitialState: function () {
        return {
            str: '# Hello, World!\n\n### Go ahead and...\n' +
            '**...test out** some  *<a href="https://help.github.com/articles/github-flavored-markdown/">markdown</a>!*\n\n' +
            '`const freeCodeCamp = \'Super Fun!\';`\n\n' +
            '- Made by\n' +
            ' - <a href="https://github.com/alanbuchanan">alanbuchanan</a>'
        }
    },

    handleChange: function () {
        this.setState({ str: document.querySelector('[name="txt"]').value })
    },

    render: function () {
        const {str} = this.state
        return (
            <div className="col-xs-12">
                <LeftPanel str={str} handleChange={this.handleChange} />
                <RightPanel str={str} />
            </div>
        )
    }
})

ReactDOM.render(<Main />, document.getElementById('root'))