package spotify;

import java.net.URL;

import org.openqa.selenium.By;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.appium.java_client.MobileElement;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.TouchAction;
public class spotifykit {
	
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
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.Button[contains(@text, 'SIGN UP FREE')]")));
		sign_up();
		//wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.TextView[contains(@text, 'Artists, songs, or albums')]")));
	;
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
		System.out.println("Bar is tested");
		
	}
	public static void Search() {
		driver.findElementByXPath("//android.widget.TextView[contains(@text, 'Artists, songs, or albums')]").click();
		MobileElement element = (MobileElement) driver.findElementByAccessibilityId("com.spotify.music:id/query");
		element.sendKeys("Johnny Cash");
		driver.findElement(By.id("android:id/text1[contains(@text, 'Johnny Cash')]")).click();
	}
	public static void Library() {
		
	}
	public static void Premium() {
		
	}
	public static void Artist() {
		
	}
    public static void Setting() {
    	MobileElement element= (MobileElement) driver.findElement(By.xpath ("//android.widget.Button[@bounds='[88,1560][992,1692]']"));
        element.click();
    			
    }
    public static void sign_up() {
    	
    	driver.findElementByXPath("//android.widget.Button[contains(@text, 'SIGN UP FREE')]").click();

    
        WebDriverWait wait1 = new WebDriverWait(driver, 20);
        wait1.until(ExpectedConditions.elementToBeClickable(By.xpath("//android.widget.Button[contains(@text, 'NONE OF THE ABOVE')]")));
        driver.findElementByXPath("//android.widget.Button[contains(@text, 'NONE OF THE ABOVE')]").click();
        wait1.until(ExpectedConditions.elementToBeClickable(By.id("com.spotify.music:id/email")));       
      driver.findElement(By.id("com.spotify.music:id/email")).sendKeys("ahmed30405@gmail.com");
      driver.findElement(By.id("com.spotify.music:id/email_next_button")).click();
      wait1.until(ExpectedConditions.elementToBeClickable(By.id("com.spotify.music:id/input_password")));   
      driver.findElement(By.id("com.spotify.music:id/input_password")).sendKeys("whatever123");
 
      driver.findElement(By.id("com.spotify.music:id/password_next_button")).click();
       //MobileElement element2= (MobileElement) driver.findElement(By.xpath ("//android.widget.NumberPicker[@bounds='[661,481][837,976]']"));
       driver.findElementByXPath("//android.widget.Button[contains(@text, '2009')]").click();
       driver.findElementByXPath("//android.widget.Button[contains(@text, '2008')]").click();
       driver.findElementByXPath("//android.widget.Button[contains(@text, '2007')]").click();
       driver.findElementByXPath("//android.widget.Button[contains(@text, '2006')]").click();
       driver.findElementByXPath("//android.widget.Button[contains(@text, '2005')]").click();
       driver.findElementByXPath("//android.widget.Button[contains(@text, '2004')]").click();
       driver.findElementByXPath("//android.widget.Button[contains(@text, '2003')]").click();
       driver.findElementByXPath("//android.widget.Button[contains(@text, '2002')]").click();
       driver.findElementByXPath("//android.widget.Button[contains(@text, '2001')]").click();
       driver.findElementByXPath("//android.widget.Button[contains(@text, '2000')]").click();
       driver.findElementByXPath("//android.widget.Button[contains(@text, '1999')]").click();
       wait1.until(ExpectedConditions.elementToBeClickable(By.id("com.spotify.music:id/age_next_button")));
          
      driver.findElement(By.id("com.spotify.music:id/age_next_button")).click();
      wait1.until(ExpectedConditions.elementToBeClickable(By.id("com.spotify.music:id/gender_button_male")));
      
      driver.findElement(By.id("com.spotify.music:id/gender_button_male")).click();	
      driver.findElement(By.id("com.spotify.music:id/name_next_button")).click();
    }
	
}