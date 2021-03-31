import React, { useState } from "react";
import "./chat.css";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Navbar from "../../containers/Navbar";
import TextField from "@material-ui/core/TextField";
import SendIcon from '@material-ui/icons/Send';
import GridList from '@material-ui/core/GridList';


export default function Chat(props) {
  const {
    handleSelectConversation,
    selected,
    conversations,
    dis,
    handleSendMessage,
  } = props;
  const [message, setMessage] = useState("");
  const handleChange = (e) => setMessage(e.target.value);
  const handleSubmit = (form) => {
    form.preventDefault();
    if (message.length > 255) setMessage("");
    else if (message) {
      handleSendMessage(selected.id, message);
      let cont = document.querySelector(".messages");
      const height = cont.scrollHeight;
      cont.scrollTo(0, height);
      setMessage("");
    }
    document.querySelector(".message-input input").value = null;
  };
  return (
    <>
      <Navbar />
      <Grid
        container
        className="chateContainer"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={11} lg={7} container className="chatContainer">
          <Grid
            item
            xs={12}
            lg={4}
            className="chatImageContainer"
            container
            justify="center"
          >
            <Grid item container sm={12} direction="column" className="friends">
              <ul>
                {selected &&
                  conversations.map((item) => (
                    <li
                      onClick={() => handleSelectConversation(item.id)}
                      key={item.id}
                      style={{width: "100%"}}
                    >
                      <div className="friendUsername">
                        <img
                          src={`http://localhost:3001/${item.path}`}
                          alt={item.lastname}
                          className="friendImage"
                          style={{
                            objectFit: "cover"
                          }}
                        />
                        <h2 className="name">
                          {item.firstname} {item.lastname}
                        </h2>
                      </div>
                    </li>
                  ))}
              </ul>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={12}
            lg={8}
            className="chatInputContainer"
            justify="center"
            // alignItems="center"
          >
            <Grid item sm={12}>
              <div className="content">
                {Object.keys(selected).length > 0 ? (
                  <>
                    <div className="contact-profile">
                      <h1
                        style={{
                          color: "grey",
                          textAlign: "center",
                        }}
                      >
                        {selected.firstname} {selected.lastname}
                      </h1>
                      <hr />
                    </div>
                    <GridList className="messages">
                      <ul style={{width: "100%"}}>
                        {selected.messages &&
                          selected.messages.length > 0 &&
                          selected.messages.map((item) => (
                            <li
                              key={Math.random()}
                              className={item.isMyMessage ? "sent" : "replies"}
                            >
                              <h6 style={{ color: "whitesmoke"}}>{item.message}</h6>
                            </li>
                          ))}
                      </ul>
                    </GridList>
                    <div className="message-input">
                      <div className="wrap">
                        <form
                          onSubmit={handleSubmit}
                          className="mssgs"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <TextField
                            onChange={handleChange}
                            disabled={dis}
                            type="text"
                            name="message"
                            placeholder="Message"
                            color="secondary"
                            fullWidth
                            InputProps={{ className: "loginInput" }}
                            InputLabelProps={{ className: "loginInputLabel" }}
                            
                          />
                          <Button type="submit" className="submit">
                           <SendIcon style={{ color: "grey"}} />
                          </Button>
                        </form>
                      </div>
                    </div>
                  </>
                ) : (
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      textAlign: "center",
                    }}
                  >
                    <h1 style={{ color: "grey" }}>Select a conversation</h1>
                  </div>
                )}
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
