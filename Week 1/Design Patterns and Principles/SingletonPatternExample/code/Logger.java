// Logger.java
public class Logger {
    // Step 2: Private static instance
    private static Logger instance;

    // Step 2: Private constructor
    private Logger() {
        System.out.println("Logger instance created.");
    }

    // Step 2: Public static method to get the instance
public static synchronized Logger getInstance() {
    if (instance == null) {
        instance = new Logger();
    }
    return instance;
}

    // Logger method
    public void log(String message) {
        System.out.println("Log: " + message);
    }
}
