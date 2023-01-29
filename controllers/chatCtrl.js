import Chat from "../modals/chatModal.js";

export const storeChatData = async (req, res) => {
  const { userId, userName, message } = req.body;
  try {
    const response = await Chat.create({
      userName: userName,
      message: message,
      UserId: userId
    });
    res.status(200).send(response);
  } catch (error) {
    res.status(401).send(error);
  }
};

export const fetchChatData = async (req, res) => {
  const chatData = await Chat.findAll();
  res.status(200).send(chatData);
};
