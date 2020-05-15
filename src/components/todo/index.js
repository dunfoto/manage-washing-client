import React, { Component } from "react";
import {
    withStyles,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    IconButton,
    Grid,
    TextField,
    Button,
    FormControl
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import ACTIONS from "../../actions";
import { connect } from "react-redux";

const styles = theme => ({
    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: "10px"
    }
});

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { item: "" };
    }

    generate = () => {
        return this.props.todo && this.props.todo.items.map(item => (
            <ListItem key={item.id}>
                <ListItemText primary={item.description} />
                <ListItemSecondaryAction>
                    <IconButton
                        aria-label="Delete"
                        onClick={this.handleDelete}
                        value={item.id}
                    >
                        <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        ));
    };

    onChangeInput = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.item !== "") {
            this.props.createItem(this.state.item);
        }
        this.setState({ item: "" });
    };
    handleDelete = event => {
        this.props.deleteItem(event.target.value);
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <FormControl>
                        <TextField
                            label="New Task"
                            id="margin-dense"
                            value={this.state.item}
                            onChange={this.onChangeInput}
                            className={classes.textField}
                            margin="dense"
                            name="item"
                        />
                    </FormControl>
                    <FormControl>
                        <Button type="submit">Add</Button>
                    </FormControl>
                </form>
                <Grid item container justify="space-evenly" alignItems="center">
                    <div className={classes.demo}>
                        <List dense={false}>{this.generate()}</List>
                    </div>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    todo: state.todo
});

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Todo));