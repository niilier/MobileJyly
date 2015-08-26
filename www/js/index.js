var Button = ReactBootstrap.Button,
    ButtonGroup = ReactBootstrap.ButtonGroup,
    Grid = ReactBootstrap.Grid,
    Row = ReactBootstrap.Row,
    Col = ReactBootstrap.Col,
    Panel = ReactBootstrap.Panel,
    ListGroup = ReactBootstrap.ListGroup,
    ListGroupItem = ReactBootstrap.ListGroupItem;

var ReactApp = React.createClass({
    render: function () {
        return (
            <div>
            <h1>JylyPutter!</h1>
            <p><Grid className='one-padding'>
                <Row>
                    <Col xs={6}><Panel>Total Score</Panel></Col>
                    <Col xs={6}><Panel>Distance</Panel></Col>
                </Row>
                <Row>
                <Col xs={12}>
                    <ButtonGroup justified>
                        <Button href='#'>1</Button>
                        <Button href='#'>2</Button>
                        <Button href='#'>3</Button>
                        <Button href='#'>4</Button>
                        <Button href='#'>5</Button>
                    </ButtonGroup>
                </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                    <ListGroup>
                        <ListGroupItem>Score1</ListGroupItem>
                        <ListGroupItem>Score2</ListGroupItem>
                        <ListGroupItem>Score3</ListGroupItem>
                    </ListGroup>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}><Button bsStyle='success' block>New Game</Button></Col>
                </Row>
            </Grid></p>
            </div>
        );
    }
});

var App = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    onDeviceReady: function() {
       console.log('DeviceReady event received. Rendering react...');

var mountNode = document.getElementById('MyAppContainer');

 React.render(<ReactApp/>,mountNode);

    }
};

App.initialize();