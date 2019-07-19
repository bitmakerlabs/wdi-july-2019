def print_divider():
    print()
    print('---')
    print()


class Report:

    def __init__(self, title='', author='', intro='', data='', summary=''):
        self.title = title
        self.author = author
        self.intro = intro
        self.data = data
        self.summary = summary

    def display(self):
        self.title_formatted()
        self.author_formatted()
        self.line_spacer()
        self.intro_formatted()
        self.line_spacer()
        self.data_formatted()
        self.line_spacer()
        self.summary_formatted()
        self.line_spacer()

    def title_formatted(self):
        pass

    def author_formatted(self):
        pass

    def intro_formatted(self):
        pass

    def data_formatted(self):
        pass

    def summary_formatted(self):
        pass

    def line_spacer(self):
        pass


class PlainTextReport(Report):

    def title_formatted(self):
        print(self.title)

    def author_formatted(self):
        print('by ' + self.author)

    def intro_formatted(self):
        print(self.intro)

    def data_formatted(self):
        for key, value in data.items():
            print(f'{value}% of people said {key}')

    def summary_formatted(self):
        print(self.summary)

    def line_spacer(self):
        print()


title = 'Python in 2019'
author = 'Guido van Rossum'
intro = 'Welcome to the Python 2019 survey results. Without further ado, here they are:'
data = {'Python is their main language': 85,
        'web development is primary use case': 27,
        'they use Python 3 (vs Python 2)': 84}
summary = "We hoped you enjoyed this and be sure to subscribe to our mailing list so you can participate in next year's survey!"

plain_text_report = PlainTextReport(title, author, intro, data, summary)

plain_text_report.display()

print_divider()


class HTMLReport(Report):
    def title_formatted(self):
        print(self.html_element('h1', self.title))

    def author_formatted(self):
        print(self.html_element('h2', 'by ' + self.author))

    def intro_formatted(self):
        print(self.html_element('p', self.intro))

    def data_formatted(self):
        print('<table>')

        for key, value in data.items():
            print('  <tr>')
            print(self.html_element('td', key, '    '))
            print(self.html_element('td', value, '    '))
            print('  </tr>')

        print('</table>')

    def summary_formatted(self):
        print(self.html_element('p', self.summary))

    def html_element(self, element, content, indent=''):
        return f'{indent}<{element}>{content}</{element}>'


html_report = HTMLReport(title, author, intro, data, summary)
html_report.display()

print_divider()


class CSVReport(Report):

    def data_formatted(self):
        for key, value in data.items():
            print(f'"{key}", "{value}"')


csv_report = CSVReport(data=data)
csv_report.display()
