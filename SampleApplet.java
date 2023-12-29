import java.applet.Applet;
import java.awt.Graphics;
import java.awt.Font;
import java.awt.Color;

@SuppressWarnings("deprecation") // Suppresses the deprecation warning
public class SampleApplet extends Applet {
    
    String text;

    public void init() {
        // Retrieve the 'text' parameter from the HTML applet tag
        text = getParameter("text");
        if (text == null) {
            text = "No text provided!";
        }
    }

    public void paint(Graphics g) {
        // Set the font and color for the text.
        g.setFont(new Font("SansSerif", Font.BOLD, 16));
        g.setColor(Color.black);

        // Draw the string on the applet.
        g.drawString(text, 20, 100);
    }
}
