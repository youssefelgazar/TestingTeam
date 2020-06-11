package spotify;

import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
public class SpotifyTest {
	
	static AndroidDriver<MobileElement> driver;
	public static void main(String[] args) {
		try {
			
		OpenSpotify();	
          	}
		catch(Exception exp) {
			System.out.println(exp.getCause());
			System.out.println(exp.getMessage());
			exp.printStackTrace();
			}
		
		WebDriverWait wait = new WebDriverWait(driver, 60);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Home')]")));
		testBar();
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Artists, songs, or albums')]")));
		Search();
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Song')]")));
		LikeandAddToPlaylist();
		Library();
		
		}
	
	public static void OpenSpotify() throws Exception {
		 DesiredCapabilities cap = new DesiredCapabilities();
		 cap.setCapability("deviceName", "emulator-5554");
		 cap.setCapability("udid", "emulator-5554");
		 cap.setCapability("platformName", "Android");
		 cap.setCapability("platformVersion", "R");	 		
		 cap.setCapability("appPackage","com.spotify.music");
		 cap.setCapability("appActivity","com.spotify.music.MainActivity");		 
		 URL url = new URL("http://127.0.0.1:4723/wd/hub");			
	     driver = new AndroidDriver<MobileElement>(url,cap);   
         System.out.println("Started");
	     
	     
	}
	
	public static void testBar() {
	
		driver.findElement(By.id("com.spotify.music:id/home_tab")).click();
		driver.findElement(By.id("com.spotify.music:id/your_library_tab")).click();
		driver.findElement(By.id("com.spotify.music:id/premium_tab")).click();
		driver.findElement(By.id("com.spotify.music:id/search_tab")).click();
		System.out.println("Bar Passed");
		
	}
	public static void Search() {
		driver.findElementByXPath("//android.widget.TextView[contains(@text, 'Artists, songs, or albums')]").click();
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//androidx.recyclerview.widget.RecyclerView")));
		driver.findElement(By.xpath("//android.widget.EditText")).sendKeys("Tamino");
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Artist')]")));
		driver.findElementByXPath("//android.widget.TextView[contains(@text, 'Cigar')]").click();
		System.out.println("Search Passed");
	}
	public static void LikeandAddToPlaylist() {
		driver.findElement(By.xpath("//android.widget.ImageButton[@bounds='[860,88][970,198]']")).click();
		WebDriverWait wait = new WebDriverWait(driver, 30);
		wait.until(ExpectedConditions.elementToBeClickable(By.id("com.spotify.music:id/snackbar_text")));
		System.out.println("Song Added to Likes");
		driver.findElement(By.xpath("//android.widget.ImageButton[@bounds='[860,88][970,198]']")).click();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("com.spotify.music:id/snackbar_text")));
		System.out.println("Song Removed from Likes");
		driver.findElementByXPath("//android.widget.Button[contains(@text, 'ADD TO PLAYLIST')]").click();
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Give your playlist a name.')]")));
		driver.findElement(By.xpath("//android.widget.EditText")).sendKeys("Tamino");
		driver.findElementByXPath("//android.widget.TextView[contains(@text, 'CREATE')]").click();
		System.out.println("Playlist Created");

		wait.until(ExpectedConditions.elementToBeClickable(By.id("com.spotify.music:id/snackbar_text")));
		
		System.out.println("Song Added to Play List");
	}
	
	
	public static void Library() {
		driver.findElement(By.id("com.spotify.music:id/your_library_tab")).click();
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Playlists')]")));
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Tamino')]")));
		System.out.println("Playlist Exists");
		driver.findElementByXPath("//android.widget.TextView[contains(@text, 'Tamino')]").click();
		driver.findElement(By.xpath("//android.widget.ImageButton[@bounds='[970,88][1080,198]']")).click();
		driver.findElementByXPath("//android.widget.TextView[contains(@text, 'Delete Playlist')]").click();
		driver.findElementByXPath("//android.widget.Button[contains(@text, 'DELETE')]").click();
		System.out.println("Playlist Deleted");
		System.out.println("Playlist Passed");
		driver.findElementByXPath("//android.widget.TextView[contains(@text, 'Artists')]").click();
		System.out.println("Moved to Artists");
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Your artists will appear here')]")));
		driver.findElementByXPath("//android.widget.Button[contains(@text, 'ADD ARTISTS')]").click();
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Choose more artists you like.')]")));
		driver.findElement(By.xpath("//android.widget.ImageView[@bounds='[734,532][1036,834]']")).click();
		driver.findElementByXPath("//android.widget.Button[contains(@text, 'DONE')]").click();
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Monty Greig')]")));
		System.out.println("Artist Followed");
		driver.findElementByXPath("//android.widget.TextView[contains(@text, 'Monty Greig')]").click();
		driver.findElement(By.xpath("//android.widget.ImageButton[@bounds='[970,88][1080,198]']")).click();
		driver.findElementByXPath("//android.widget.TextView[contains(@text, 'Following')]").click();
		wait.until(ExpectedConditions.elementToBeClickable(By.id("com.spotify.music:id/snackbar_text")));
		System.out.println("Artist UnFollowed");
		System.out.println("Artists Passed");
		driver.findElement(By.id("com.spotify.music:id/your_library_tab")).click();
		driver.findElementByXPath("//android.widget.TextView[contains(@text, 'Albums')]").click();
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Your albums will appear here')]")));
		System.out.println("Albums Passed");
		
		System.out.println("Library Passed");

	}


}
