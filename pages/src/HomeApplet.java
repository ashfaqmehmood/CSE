import java.applet.Applet;
import java.awt.Graphics;
import java.awt.Font;
import java.awt.Color;

public class HomeApplet extends Applet {
    // Hardcoded content string
    String content = "This is home. The department of Computer Science and Engineering at the College of Engineering and Technology was started in 2007. The aim of the department is to strive for better and best accomplishments... (add more content as needed)";

    public void init() {
        // Initialization code if needed
    }

    public void paint(Graphics g) {
        // Set the font and color for the text
        Font font = new Font("SansSerif", Font.BOLD, 16);
        g.setFont(font);
        g.setColor(Color.black);

        // Draw the content, wrapping text as needed
        int y = 50;
        for (String line : wrap(content, 70)) { // Wrap text to 70 characters per line
            g.drawString(line, 10, y);
            y += g.getFontMetrics().getHeight();
        }
    }

    // Helper method to wrap text
    private String[] wrap(String text, int len) {
        // Split text into words
        String[] words = text.split(" ");
        StringBuilder sb = new StringBuilder(text.length());
        String line = "";

        for (String word : words) {
            if (line.length() + word.length() > len) {
                sb.append(line).append("\n");
                line = word;
            } else {
                if (!line.isEmpty()) {
                    line += " ";
                }
                line += word;
            }
        }

        if (!line.isEmpty()) {
            sb.append(line);
        }

        return sb.toString().split("\n");
    }
}
