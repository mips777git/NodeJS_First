const connectDB = require('./config/database');
const mongoose = require('mongoose');

// MongoDB 연결
connectDB();

// 간단한 스키마 예제
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

// 예제 사용법
async function runExample() {
  try {
    // 새 사용자 생성
    const newUser = new User({
      name: '홍길동',
      email: 'hong@example.com',
      age: 25,
    });

    // 저장
    await newUser.save();
    console.log('사용자 생성 완료:', newUser);

    // 모든 사용자 조회
    const users = await User.find();
    console.log('전체 사용자:', users);
  } catch (error) {
    console.error('에러 발생:', error.message);
  }
}

// 프로그램 시작 시 예제 실행
setTimeout(runExample, 2000);

// 프로세스 종료 시 연결 정리
process.on('SIGINT', async function () {
  await mongoose.connection.close();
  console.log('\nMongoDB 연결이 종료되었습니다.');
  process.exit(0);
});
