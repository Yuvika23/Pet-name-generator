def chatbot_response(user_input):
    user_input = user_input.lower()

    if "hello" in user_input or "hi" in user_input:
        return "Hello there! How can I help you today?"
    elif "how are you" in user_input:
        return "I'm just a bot, but I'm doing great! Thanks for asking."
    elif "bye" in user_input:
        return "Goodbye! Have a nice day!"
    else:
        return "I'm sorry, I don't understand that."

# Chat loop
print("ChatBot: Type 'bye' to exit.")
while True:
    user = input("You: ")
    if user.lower() == "bye":
        print("ChatBot: Bye! 👋")
        break
    response = chatbot_response(user)
    print("ChatBot:", response)
