import fs from 'fs';
import { LeetcodeQuestion } from "./src/types"
import { sendSMS } from './src/sms';

async function main() {
    const leetcodeQuestions = JSON.parse(fs.readFileSync('./src/problems.json', 'utf8')) as LeetcodeQuestion[];
    const randomQuestion = leetcodeQuestions[Math.floor(Math.random() * leetcodeQuestions.length)];
    const randomQuestionTitle = randomQuestion.stat.question__title;
    const randomQuestionTitleSlug = randomQuestion.stat.question__title_slug;
    const leetcodeURL = `https://leetcode.com/problems/${randomQuestionTitleSlug}/`;
    const message = `Your random Leetcode question is: ${randomQuestionTitle} - ${leetcodeURL}`;
    const smsSent = await sendSMS({ message: message });
    if (!smsSent) {
        console.log(`Message failed to send.`);        
    } else {
        console.log(`Message sent successfully!`);
    }
}

main()
    .catch((error) => {
        console.error(error);
        process.exit(1);
});