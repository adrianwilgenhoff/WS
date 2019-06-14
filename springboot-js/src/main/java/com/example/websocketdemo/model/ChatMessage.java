package com.example.websocketdemo.model;

import java.time.LocalDateTime;

/**
 * Created AEW.
 */
public class ChatMessage {
    private MessageType type;
    private String content;
    private String sender;
    private String dateTime = LocalDateTime.now().getHour() + ":" + LocalDateTime.now().getMinute();

    public enum MessageType {
        CHAT, JOIN, LEAVE
    }

    public MessageType getType() {
        return type;
    }

    public void setType(MessageType type) {
        this.type = type;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }
}
