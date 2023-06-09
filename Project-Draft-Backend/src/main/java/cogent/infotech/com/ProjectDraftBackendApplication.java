package cogent.infotech.com;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import cogent.infotech.com.entities.Answer;
import cogent.infotech.com.entities.Chat;
import cogent.infotech.com.entities.Question;
import cogent.infotech.com.entities.User;
import cogent.infotech.com.repositories.AnswerRepository;
import cogent.infotech.com.repositories.ChatRepository;
import cogent.infotech.com.repositories.QuestionRepository;
import cogent.infotech.com.repositories.UserRepository;

@SpringBootApplication
public class ProjectDraftBackendApplication {

	@Autowired
	UserRepository userRepo;
	@Autowired
	QuestionRepository questionRepo;
	@Autowired
	AnswerRepository answerRepo;
	@Autowired
	ChatRepository chatRepo;
	
	LocalDateTime x = LocalDateTime.now();
	String y = x.toString();
	
	
	public static void main(String[] args) {
		SpringApplication.run(ProjectDraftBackendApplication.class, args);
	}

	// The purpose of the following code is just to create filler data
	// It is only for development and demostration purposes
	// --Juan David
	@PostConstruct
	public void initUsers() {
		List<User> fillerUsers = new ArrayList<>();
		fillerUsers.add(new User("David", "davi123", "password", "capstone.ad657@gmail.com", "admin"));
		fillerUsers.add(new User("Juan", "juan23", "password", "capstone.ad657@gmail.com", "admin"));
		fillerUsers.add(new User("Sara", "sar1t4" ,"password", "capstone.ad657@gmail.com", "admin"));
		fillerUsers.add(new User("Royce", "raaaa" ,"password", "ramalama@gmail.com", "user"));
		fillerUsers.add(new User("Anudeep", "anuuuu" ,"password", "amunra@gmail.com", "user"));
		fillerUsers.add(new User("Gyanendra", "arjuna227" ,"password", "parvati@gmail.com", "user"));
		fillerUsers.add(new User("Cecilia", "sancta27" ,"password", "inesa@gmail.com", "user"));
		fillerUsers.add(new User("UserTest1", "1" ,"1", "user@gmail.com", "user"));
		fillerUsers.add(new User("UserTest2", "2" ,"2", "user@gmail.com", "user"));
		fillerUsers.add(new User("AdminTest", "3" ,"3", "admin@gmail.com", "admin"));
		userRepo.saveAll(fillerUsers);
		
		
		List<Question> fillerQuestions = new ArrayList<>();
		fillerQuestions.add(new Question("Question Description", "../../assets/homepage.jpg", "Date time", "Topic", "Title", "sancta27"));
		fillerQuestions.add(new Question("I've been stuck for a week trying to pass an authorization header from angular to Spring. Pls help!", 
					"../../assets/beach.jpg", "Date time", "technology", "How do HTTP headers work?", "raaaa"));
		fillerQuestions.add(new Question("My gf and I left the fridge open yesterday. Is this a sign that our relationship is falling apart?",
					"../../assets/drinks.JPG", "Date time", "relationships", "Should I break up with my girlfriend?", "raaaa"));
		fillerQuestions.add(new Question("Please show your work. No calculators are allowed", 
				"../../assets/flower.JPG", "Date time", "math", "Can you prove that 1+1=2?", "juan23"));
		fillerQuestions.add(new Question("I do not understand user authentication with JWT. Plz explain like I'm 5.", 
				"../../assets/lines.jpg", "Date time", "technology", "What is JWT?", "dm_me_algorithms"));
		fillerQuestions.add(new Question("Yes", "../../assets/math.png", "Date time", "topic", "Is Arduino better than RaspberryPi?", "juan23"));
		fillerQuestions.add(new Question("for testing", "../../assets/math.png", "Date time", "server", "just a filler for testing", "1"));
		fillerQuestions.add(new Question("for testing", "../../assets/drinks.JPG", "Date time", "gardening", "just a filler for testing", "1"));
		fillerQuestions.add(new Question("for testing", "../../assets/flower.JPG", "Date time", "databases", "just a filler for testing?", "1"));
		fillerQuestions.add(new Question("for testing", "../../assets/headshot.jpeg", "Date time", "server", "just a filler for testing", "2"));
		fillerQuestions.add(new Question("for testing", "../../assets/lines.jpg", "Date time", "gardening", "just a filler for testing", "2"));
		fillerQuestions.add(new Question("for testing", "../../assets/wow.png", "Date time", "databases", "just a filler for testing?", "2"));
		questionRepo.saveAll(fillerQuestions);
		
		List<Answer> fillerAnswers = new ArrayList<>();
		fillerAnswers.add(new Answer("Have you tried looking at the Angular documentation?",
				 "../../assets/home.jpg",y, fillerQuestions.get(1), "davi23"));
		fillerAnswers.add(new Answer("This is an answer description. It is very helpful and addresses all of the asker's concerns without any hint of disdain.",
				"../../assets/event.png",y, fillerQuestions.get(0), "juan23"));
		fillerAnswers.add(new Answer("JWT stands for JSON Web Token",
				"../../assets/lines.jpg", y,fillerQuestions.get(4), "raaaa"));
		fillerAnswers.add(new Answer("JWT is a way of storing a user's information on the client side, so that user information doesn't need to be passed and validated constantly through the server.",
				"../../assets/drinks.JPG",y, fillerQuestions.get(4), "anuuuu"));
		fillerAnswers.add(new Answer("This 'answer' is not the least bit helpful. It berates the original asker on his ignorance and provides no useful links. It only serves to feed the responder's ego.",
				"../../assets/flower.JPG",y, fillerQuestions.get(0), "davi23"));
		answerRepo.saveAll(fillerAnswers);
		
		//Simulation of a chat
		List<Chat> chatSimulation = new ArrayList<>();
		chatSimulation.add(new Chat("anuuuu", "raaaa", "Hey where did you learn Python?", y));
		chatSimulation.add(new Chat("raaaa", "anuuuu", "Oh I learned it online.", y));
		chatSimulation.add(new Chat("raaaa", "anuuuu", "Why do you ask?", y));
		chatSimulation.add(new Chat("anuuuu", "raaaa", "I'm trying to learn it.", y));
		chatSimulation.add(new Chat("anuuuu", "raaaa", "Can you link to where you learned?", y));
		chatSimulation.add(new Chat("raaaa", "anuuuu", "Yea sure.", y));
		chatSimulation.add(new Chat("raaaa", "anuuuu", "Just gimme a sec", y));
		chatSimulation.add(new Chat("raaaa", "anuuuu", "Ok Here: <Link>", y));
		chatSimulation.add(new Chat("anuuuu", "raaaa", "Thanks", y));
		chatSimulation.add(new Chat("raaaa", "anuuuu", "Np", y));
		chatRepo.saveAll(chatSimulation);
		
	}
}
