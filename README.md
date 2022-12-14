# Weightlifting App Machine Learning

Leverages ChatGPT to predict the next exercise set progression.

## Setup

In order to run this yourself, first install the necessary packages:

```bash
npm install
```

Then, head to [ChatGPT](https://chat.openai.com/chat) and use the instructions [here](https://github.com/transitive-bullshit/chatgpt-api#docs) to populate the environment variable values in [`config/.env.dev`](config/.env.dev).

Finally, run the script:

```bash
npm run start
```

## Results

Example execution results for Flat Barbell Bench Press:

```bash
Message:
Guess the next line:
135 x 12, 225 x 11, 275 x 10, 305 x 10, 285 x 8, 255 x 11
135 x 12, 225 x 10, 275 x 8, 295 x 8, 275 x 8
135 x 12, 205 x 13, 255 x 12, 285 x 10, 255 x 10, 240 x 10
...
135 x 12, 185 x 10, 205 x 9, 195 x 8
135 x 15, 185 x 10, 205 x 8, 205 x 6
185 x 8, 135 x 15, 145 x 12, 150 x 10

Actual:
135 x 12, 225 x 10, 275 x 8, 325 x 6, 275 x 10

Predicted:
135 x 10, 225 x 10, 275 x 10, 305 x 8, 315 x 6, 275 x 10.
```
