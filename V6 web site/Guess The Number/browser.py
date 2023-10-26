import sys
from PyQt5.QtWidgets import QApplication, QMainWindow, QWebEngineView, QToolBar, QAction, QLineEdit, QVBoxLayout, QWidget
from PyQt5.QtCore import QUrl

class BasicWebBrowser(QMainWindow):
    def __init__(self):
        super().__init__()
        self.browser = QWebEngineView()
        self.browser.setSizePolicy(QVBoxLayout.Expanding, QVBoxLayout.Expanding)
        self.browser.urlChanged.connect(self.update_urlbar)
        self.browser.loadFinished.connect(self.update_title)
        
        self.search_bar = QLineEdit()
        self.search_bar.returnPressed.connect(self.navigate_to_url)
        
        self.layout = QVBoxLayout()
        self.layout.addWidget(self.search_bar)
        self.layout.addWidget(self.browser)
        
        container = QWidget()
        container.setLayout(self.layout)
        
        self.setCentralWidget(container)
        
        self.nav_bar = QToolBar()
        self.addToolBar(self.nav_bar)
        
        back_button = QAction("Back", self)
        back_button.setStatusTip("Back to previous page")
        back_button.triggered.connect(self.browser.back)
        self.nav_bar.addAction(back_button)
        
        forward_button = QAction("Forward", self)
        forward_button.setStatusTip("Forward to next page")
        forward_button.triggered.connect(self.browser.forward)
        self.nav_bar.addAction(forward_button)
        
        reload_button = QAction("Reload", self)
        reload_button.setStatusTip("Reload page")
        reload_button.triggered.connect(self.browser.reload)
        self.nav_bar.addAction(reload_button)
        
        home_button = QAction("Home", self)
        home_button.setStatusTip("Go home")
        home_button.triggered.connect(self.navigate_home)
        self.nav_bar.addAction(home_button)
        
        nav_to_url_button = QAction("Go", self)
        nav_to_url_button.setStatusTip("Go to URL")
        nav_to_url_button.triggered.connect(self.navigate_to_url)
        self.nav_bar.addAction(nav_to_url_button)
        
        stop_button = QAction("Stop", self)
        stop_button.setStatusTip("Stop loading current page")
        stop_button.triggered.connect(self.browser.stop)
        self.nav_bar.addAction(stop_button)
        
        self.urlbar = QLineEdit()
        self.urlbar.setStatusTip("URL")
        self.urlbar.returnPressed.connect(self.navigate_to_url)
        self.nav_bar.addWidget(self.urlbar)
        
        self.show()
        self.resize(1024, 768)
        
    def update_title(self):
        title = self.browser.page().title()
        self.setWindowTitle(title)
        
    def navigate_home(self):
        self.browser.setUrl(QUrl("https://www.example.com"))
        
    def navigate_to_url(self):
        q = QUrl(self.search_bar.text())
        if q.scheme() == "":
            q.setScheme("http")
        
        self.browser.setUrl(q)
        
    def update_urlbar(self, q):
        self.urlbar.setText(q.toString())
        self.urlbar.setCursorPosition(0)
        self.urlbar.setFixedWidth(300)

def main():
    app = QApplication(sys.argv)
    browser = BasicWebBrowser()
    sys.exit(app.exec_())

if __name__ == "__main__":
    main()
