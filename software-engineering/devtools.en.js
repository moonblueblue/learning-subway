// English for 1.7 Developer tools. Korean (the page) → English. Rules: DESIGN.md "두 언어".
// Names in the lab: 레슨 lesson, 연습 practice, 사진 photos, 메모.txt notes.txt, 메모 망치기 break notes, 첫 메모 first note.
// The lab keeps the Korean names; devtools.html reads names typed in English as the Korean ones (fromTyped).
window.lessonText = {
  // Page
  '개발 도구 · 레슨 1.7': 'Developer tools · Lesson 1.7',
  '흉내 낸 터미널에서 폴더를 오가고, git으로 버전을 저장하고 실수를 되돌려 보세요.':
    'In a pretend terminal, move between folders, save versions with git and undo a mistake.',
  '터미널과 git은 무엇을 대신해 줄까요? 이 페이지 안의 흉내 낸 터미널에 명령을 직접 입력해 보세요. 실제 컴퓨터에는 아무 영향이 없습니다.':
    'What do the terminal and git do for you? Type commands into the pretend terminal on this page. Nothing happens to your real computer.',
  '터미널': 'Terminal', '터미널 출력': 'Terminal output', '폴더': 'Folders', 'git 저장 기록': 'git history', '파일 편집': 'Edit the file',
  '눌러서 입력:': 'Press to type:', '다음:': 'Next:', '다음: {0}': 'Next: {0}', '{0} 다음: {1}': '{0} Next: {1}', '{0} 이 단계를 마쳤습니다.': '{0} This step is done.', '이 단계를 마쳤습니다.': 'This step is done.',
  '이 단계의 문제를 모두 풀었습니다. 다른 명령도 자유롭게 입력해 보세요.': 'You have solved every task in this step. Feel free to type other commands too.',
  '{#0} / {#1} 완료': '{0} / {1} done',
  '흉내 낸 터미널입니다. 아래 버튼을 누르거나 직접 입력하세요.': 'This is a pretend terminal. Press a button below or type a command.',
  '레슨 폴더에 git 기록이 하나 있는 상태에서 시작합니다.': 'It starts with one git version already saved in the lesson folder.',
  // Names and contents
  '레슨': 'lesson', '연습': 'practice', '사진': 'photos', '메모.txt': 'notes.txt', '메모 망치기': 'break notes', '첫 메모': 'first note',
  '레슨/': 'lesson/', '연습/': 'practice/', '사진/': 'photos/', '~/레슨': '~/lesson', '~/사진': '~/photos', '~/레슨/': '~/lesson/',
  '~/레슨/연습': '~/lesson/practice', '~/레슨/메모.txt': '~/lesson/notes.txt', '~/레슨 $': '~/lesson $', '~/레슨/연습 $': '~/lesson/practice $',
  '변수는 칸에 붙인 이름': 'A variable is a name on a cell', '(실수로 지움)': '(deleted by mistake)',
  '메모.txt\n{0}': 'notes.txt\n{0}',
  // Commands
  'cd 레슨': 'cd lesson', 'mkdir 연습': 'mkdir practice', 'git add 메모.txt': 'git add notes.txt', 'git commit -m "첫 메모"': 'git commit -m "first note"',
  'git restore 메모.txt': 'git restore notes.txt',
  // Terminal output. Lines joined from names are put back together from their parts.
  '{0} $ {1}': '{0} $ {1}', '{0}   {1}': '{0}   {1}', '{0}  ← 지금 여기': '{0}  ← you are here', '[{0}] {1}': '[{0}] {1}', '- {0}': '- {0}', '+ {0}': '+ {0}',
  '(비어 있음)': '(empty)', '(다른 점 없음)': '(no differences)',
  'cd: {0}: 그런 폴더가 없습니다': 'cd: {0}: no such folder', 'mkdir: 만들 폴더 이름을 적어 주세요': 'mkdir: give the name of the folder to make',
  'mkdir: {0}: 이미 있습니다': 'mkdir: {0}: already exists',
  '이 실습에서는 레슨 폴더에서 git init을 해 주세요 (cd 레슨).': 'In this lab, run git init in the lesson folder (cd lesson).',
  '이미 기록을 시작했습니다.': 'History has already been started.', '빈 git 저장소를 만들었습니다: ~/레슨/.git': 'Made an empty git repository: ~/lesson/.git',
  'fatal: git 저장소가 아닙니다 (먼저 레슨 폴더에서 git init)': 'fatal: not a git repository (run git init in the lesson folder first)',
  '커밋할 변경: 메모.txt': 'Changes to commit: notes.txt', '아직 기록하지 않은 파일: 메모.txt': 'Untracked file: notes.txt', '바뀐 파일: 메모.txt': 'Changed file: notes.txt',
  '커밋할 것이 없습니다. 작업 폴더가 깨끗합니다.': 'Nothing to commit. The working folder is clean.',
  '메모.txt를 저장할 목록에 올렸습니다.': 'Added notes.txt to the list to save.', 'git add: {0}: 그런 파일이 없습니다': 'git add: {0}: no such file',
  '커밋 설명을 -m "설명"으로 적어 주세요.': 'Give a commit description with -m "description".',
  '저장할 목록이 비어 있습니다. 먼저 git add를 하세요.': 'The list to save is empty. Run git add first.',
  '아직 커밋이 없습니다.': 'No commits yet.', '아직 커밋이 없습니다. 저장할 목록: 메모.txt': 'No commits yet. To save: notes.txt', 'git init 전입니다.': 'Before git init.',
  'git restore 메모.txt처럼 되돌릴 파일을 적어 주세요.': 'Name the file to restore, as in git restore notes.txt.',
  '되돌릴 버전이 없습니다.': 'There is no version to go back to.', '메모.txt를 마지막 버전으로 되돌렸습니다.': 'Restored notes.txt to the last version.',
  '메모.txt 내용이 바뀌었습니다.': 'The contents of notes.txt changed.',
  "git: '{0}'은(는) 이 실습에서 지원하지 않는 명령입니다.": "git: '{0}' is not a command this lab supports.",
  '{0}: 이 실습에서 지원하지 않는 명령입니다. 아래 버튼을 눌러 보세요.': '{0}: not a command this lab supports. Try the buttons below.',
  // Step 1
  '폴더 다니기': 'Moving between folders', '현재 폴더 ~': 'Current folder ~', 'pwd 결과 ~/레슨': 'pwd gives ~/lesson',
  '터미널은 글자로 컴퓨터를 다룬다': 'A terminal works the computer with text',
  '터미널은 마우스 대신 명령을 입력해 컴퓨터를 다루는 창입니다. pwd는 지금 있는 폴더를, ls는 폴더 안의 목록을 보여 주고, cd는 다른 폴더로 옮겨 가며, mkdir은 새 폴더를 만듭니다. 처음엔 낯설지만 같은 일을 정확하고 빠르게 되풀이할 수 있어서 개발자들이 매일 씁니다.':
    'A terminal is a window where you work the computer by typing commands instead of using a mouse. pwd shows the folder you are in, ls lists what is in a folder, cd moves to another folder, and mkdir makes a new folder. It feels strange at first, but developers use it every day because it repeats the same work exactly and quickly.',
  '0.5에서 본 저장장치의 파일들은 폴더라는 이름 붙은 묶음 안에 들어 있습니다. 터미널은 그 폴더 사이를 글자로 오가는 방법입니다.':
    'The files on the storage you saw in 0.5 sit inside named groups called folders. A terminal is a way to move between those folders with text.',
  'pwd로 지금 있는 폴더를 확인해 보세요.': 'Check the folder you are in with pwd.',
  'cd 레슨으로 레슨 폴더에 들어가 ls로 안을 보세요.': 'Go into the lesson folder with cd lesson and look inside with ls.',
  '레슨 폴더 안에 연습이라는 폴더를 만들어 보세요.': 'Make a folder called practice inside the lesson folder.',
  // Step 2
  'git으로 저장': 'Saving with git', 'git add 후 commit': 'git add, then commit', '변경 내용이 버전으로 남음': 'The change is kept as a version',
  'git은 파일의 버전을 기록한다': 'git records versions of files',
  'git은 파일이 어떻게 바뀌어 왔는지 기록하는 도구입니다. git init으로 기록을 시작하고, git add로 저장할 파일을 고른 뒤, git commit -m "설명"으로 그 순간의 모습을 하나의 버전으로 남깁니다. 저장할 때마다 짧은 이름표(커밋 번호)가 붙습니다.':
    'git is a tool that records how files have changed. git init starts the history, git add picks the files to save, and git commit -m "description" keeps how they look at that moment as one version. Each save gets a short tag (a commit ID).',
  '1.6에서 버그를 고칠 때 "고치기 전"으로 돌아갈 방법이 있으면 마음 놓고 고칠 수 있습니다. git이 바로 그 방법입니다.':
    'When fixing a bug as in 1.6, you can fix freely if there is a way back to "before the fix". git is that way.',
  '레슨 폴더에서 git init으로 기록을 시작하세요.': 'Start the history with git init in the lesson folder.',
  'git add 메모.txt로 저장할 파일을 고르세요.': 'Pick the file to save with git add notes.txt.',
  'git commit -m "첫 메모"로 첫 버전을 남기세요.': 'Save the first version with git commit -m "first note".',
  // Step 3
  '실수 되돌리기': 'Undoing a mistake', '추적 중인 파일을 잘못 수정': 'A tracked file is changed by mistake',
  '저장한 버전에서 파일 복원': 'Restore the file from a saved version', '이전 내용 회복': 'The earlier contents come back',
  '기록이 있으면 실수를 되돌릴 수 있다': 'With a history, a mistake can be undone',
  '"메모 망치기"를 누르면 메모 파일 내용이 실수로 지워진 것처럼 바뀝니다. git diff는 마지막 버전과 지금 파일이 어떻게 다른지 보여 주고, git restore는 파일을 마지막 버전으로 되돌립니다. git log로는 지금까지 남긴 버전 목록을 볼 수 있습니다.':
    'Pressing "break notes" changes the notes file as if its contents were deleted by mistake. git diff shows how the file now differs from the last version, and git restore puts the file back to the last version. git log shows the list of versions saved so far.',
  '0.4에서 손실 압축으로 버린 정보는 돌아오지 않았습니다. git은 버전을 통째로 남겨 두기 때문에 언제든 돌아갈 수 있습니다.':
    'In 0.4, information thrown away by lossy compression never came back. git keeps whole versions, so you can always go back.',
  '"메모 망치기"를 눌러 파일을 바꾼 뒤 git diff로 달라진 점을 보세요.': 'Press "break notes" to change the file, then see what changed with git diff.',
  'git restore 메모.txt로 파일을 되돌리세요.': 'Put the file back with git restore notes.txt.',
};
