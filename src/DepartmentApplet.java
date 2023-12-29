import java.applet.Applet;
import java.awt.Color;
import java.awt.Graphics;
import java.awt.Font;
import java.awt.Button;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class DepartmentApplet extends Applet implements ActionListener {
    Button programsButton;
    private String departmentContent;

    @Override
    public void init() {
        // Set background color and layout
        setBackground(Color.lightGray);
        setLayout(null);

        // Initialize the button and set its bounds
        programsButton = new Button("Programs Offered");
        programsButton.setBounds(50, 100, 120, 30);
        programsButton.addActionListener(this);
        add(programsButton);

        departmentContent = getParameter("departmentContent");

    }

    @Override
    public void paint(Graphics g) {
        // Set the color for the text
        g.setColor(Color.black);

        // Set font and draw the title
        g.setFont(new Font("Helvetica", Font.BOLD, 16));
        g.drawString("Department of Computer Science", 10, 60);

        // Draw the description text
        g.setFont(new Font("Helvetica", Font.PLAIN, 12));
        g.drawString("Welcome to the Computer Science Department.", 10, 140);
        g.drawString("Explore our programs and courses.", 10, 160);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        // This method would handle button clicks
        // Ideally, it would communicate with JavaScript to navigate
        // For now, it will just print out to the Java console
        System.out.println("Button clicked. In a real app, this would navigate to the programs page.");
    }
}
