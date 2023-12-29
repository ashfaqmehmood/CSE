import java.applet.Applet;
import java.awt.Color;
import java.awt.Font;  // Import the Font class
import java.awt.Graphics;

public class Aa extends Applet {
    String text;
    Color textColor;
    boolean isHeading;

    public void init() {
        // Get the parameters
        text = getParameter("text").replace("\\n", "\n"); // Replace \\n with actual line breaks
        isHeading = Boolean.parseBoolean(getParameter("isHeading"));
        try {
            String colorParam = getParameter("color");
            textColor = Color.decode(colorParam);
        } catch (NumberFormatException e) {
            textColor = Color.BLACK; // Default color
        }
    }

    public void paint(Graphics g) {
        // Set the color
        g.setColor(textColor);

        // Determine if this should be a heading and set the font accordingly
        if (isHeading) {
            g.setFont(new Font("SansSerif", Font.BOLD, 22));
        } else {
            g.setFont(new Font("SansSerif", Font.PLAIN, 16));
        }

        // Draw the text
        drawStringMultiLine(g, text, 20, 50);
    }

    // Helper method to handle multi-line text
    private void drawStringMultiLine(Graphics g, String text, int x, int y) {
        for (String line : text.split("\n")) {
            g.drawString(line, x, y += g.getFontMetrics().getHeight());
        }
    }
}
