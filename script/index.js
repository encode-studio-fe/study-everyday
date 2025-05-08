import { format, addDays } from 'date-fns';
import fs from 'fs';
import path from 'path';

const args = process.argv.slice(2);
const createTomorrow = args.includes('n');

const template = `// 题目
/*


*/

/*
答案：

*/`;

const today = new Date();
const targetDate = createTomorrow ? addDays(today, 1) : today;
const fileName = format(targetDate, 'yyyy-MM-dd') + '.js';
const filePath = path.resolve(process.cwd(), fileName);

if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, template);
    console.log(`创建文件成功: ${fileName}`);
} else {
    console.log(`文件已存在: ${fileName}`);
}