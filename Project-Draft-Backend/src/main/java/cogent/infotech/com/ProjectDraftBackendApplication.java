package cogent.infotech.com;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import cogent.infotech.com.entities.Answer;
import cogent.infotech.com.entities.Question;
import cogent.infotech.com.entities.User;
import cogent.infotech.com.repositories.AnswerRepository;
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
	
	public static void main(String[] args) {
		SpringApplication.run(ProjectDraftBackendApplication.class, args);
	}

	// The purpose of the following code is just to create filler data
	// It is only for development and demostration purposes
	// --Juan David
	@PostConstruct
	public void initUsers() {
		List<User> fillerUsers = new ArrayList<>();
		fillerUsers.add(new User("David", "davi123", "password", "david@gmail.com", "admin"));
		fillerUsers.add(new User("Juan", "juan23", "password", "jd@gmail.com", "admin"));
		fillerUsers.add(new User("Sara", "sar1t4" ,"password", "sarar@gmail.com", "admin"));
		fillerUsers.add(new User("Royce", "raaaa" ,"password", "ramalama@gmail.com", "user"));
		fillerUsers.add(new User("Anudeep", "anuuuu" ,"password", "amunra@gmail.com", "user"));
		fillerUsers.add(new User("Gyanendra", "arjuna227" ,"password", "parvati@gmail.com", "user"));
		fillerUsers.add(new User("Cecilia", "sancta27" ,"password", "inesa@gmail.com", "user"));
		userRepo.saveAll(fillerUsers);
		
		
		List<Question> fillerQuestions = new ArrayList<>();
		fillerQuestions.add(new Question("Question Description", "Image Source", "Date time", "Topic", "Title", "Created By"));
		fillerQuestions.add(new Question("I've been stuck for a week trying to pass an authorization header from angular to Spring. Pls help!", 
					"Image Source", "Date time", "Technology", "How do HTTP headers work?", "juandiIzBadAtCode"));
		fillerQuestions.add(new Question("My gf and I left the fridge open yesterday. Is this a sign that our relationship is falling apart?",
					"Image Source", "Date time", "Relationship", "Should I break up with my girlfriend?", "toxico69"));
		fillerQuestions.add(new Question("Please show your work. No calculators are allowed", 
				"Image Source", "Date time", "Math", "Can you prove that 1+1=2?", "karen121"));
		fillerQuestions.add(new Question("I do not understand user authentication with JWT. Plz explain like I'm 5.", 
				"Image Source", "Date time", "Technology", "What is JWT?", "dm_me_algorithms"));
		fillerQuestions.add(new Question("Yes", "Image Source", "Date time", "Topic", "Is Arduino better than RaspberryPi?", "arduinoftw"));
		questionRepo.saveAll(fillerQuestions);
		
		List<Answer> fillerAnswers = new ArrayList<>();
		
	}
}
