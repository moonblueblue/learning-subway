// English for OS 5.1 Devices and I/O. Korean (the page) → English. Rules: DESIGN.md "두 언어".
window.lessonText = {
  // Page
  '장치와 I/O · 레슨 5.1': 'Devices and I/O · Lesson 5.1',
  '운영체제 5장 장치와 파일 · 레슨 5.1': 'Operating systems chapter 5 Devices and files · Lesson 5.1',
  '장치와 I/O': 'Devices and I/O',
  'CPU가 한 칸씩 옮기는 입출력, 컨트롤러가 RAM에 직접 쓰는 DMA, 장치마다 다른 명령을 감추는 드라이버, 디스크를 기다리는 동안 다른 일을 하는 CPU를 한 정거장씩 따라가 보세요.':
    'Follow, one station at a time, I/O where the CPU copies one word at a time, DMA where the controller writes straight into RAM, the driver that hides each device\'s own commands, and the CPU doing other work while it waits for the disk.',
  '디스크에서 4KiB를 읽을 때 CPU, 드라이버, 장치 컨트롤러, RAM은 각각 무엇을 할까요? 데이터가 장치에서 RAM까지 오는 길을 한 정거장씩 따라가 보세요.':
    'When 4 KiB is read from a disk, what do the CPU, the driver, the device controller and RAM each do? Follow, station by station, the data\'s road from the device to RAM.',
  '디스크에서 4KiB를 읽을 때 CPU, 드라이버, 장치 컨트롤러, RAM은 각각 무엇을 할까?': 'When 4 KiB is read from a disk, what do the CPU, the driver, the device controller and RAM each do?',
  '프로그램, 드라이버, RAM, 장치': 'Program, driver, RAM, device',
  '드라이버가 디스크 컨트롤러에 명령하고, 컨트롤러가 RAM에 데이터를 옮긴 뒤 인터럽트로 완료를 알리는 장면': 'The driver commands the disk controller, which moves the data into RAM and reports completion with an interrupt',
  '사용자 영역': 'User space', '커널 영역': 'Kernel space', '커널 영역 · 하드웨어': 'Kernel space · hardware',
  '프로세스': 'Process', '커널': 'Kernel', '메모리': 'Memory', '장치': 'Device',
  '"다음 단계"를 누르면 신호가 한 정거장씩 움직입니다.': 'Press "Next step" and the signal moves one station at a time.',
  '"다음 단계"를 눌러 신호를 한 정거장씩 옮겨 보세요. 중간에 예측 문제가 나옵니다.': 'Press "Next step" to move the signal one station at a time. Prediction questions come up along the way.',
  // Stations
  '프로그램': 'Program', '디스크 드라이버': 'Disk driver', '디스크 컨트롤러': 'Disk controller', '드라이버': 'Driver', 'NVMe SSD': 'NVMe SSD', 'USB 메모리': 'USB stick', '프로세스 A': 'Process A', '프로세스 B': 'Process B',
  // Legs in the stage list and the example strip
  '프로그램 → 디스크 드라이버': 'Program → disk driver', '디스크 컨트롤러 → 디스크 드라이버': 'Disk controller → disk driver', '디스크 드라이버 → RAM': 'Disk driver → RAM', '디스크 드라이버 → 디스크 컨트롤러': 'Disk driver → disk controller',
  '디스크 컨트롤러 → RAM': 'Disk controller → RAM', '디스크 드라이버 → 프로그램': 'Disk driver → program', '프로그램 → 드라이버': 'Program → driver', '드라이버 → NVMe SSD': 'Driver → NVMe SSD', '드라이버 → USB 메모리': 'Driver → USB stick',
  'USB 메모리 → 프로그램': 'USB stick → program', '프로세스 A → 드라이버': 'Process A → driver', '드라이버 → 프로세스 B': 'Driver → process B', '디스크 컨트롤러 → 드라이버': 'Disk controller → driver', '드라이버 → 프로세스 A': 'Driver → process A',
  '디스크 드라이버 · 4KiB': 'Disk driver · 4 KiB', '디스크 컨트롤러 · 완료 인터럽트': 'Disk controller · completion interrupt', '드라이버 · USB 전송': 'Driver · USB transfer', 'USB 메모리 · 데이터': 'USB stick · data', '디스크 컨트롤러 · 완료 인터럽트 ': 'Disk controller · completion interrupt',
  // Badges and moving labels
  'read 4KiB': 'read 4 KiB', 'read': 'read', 'CPU가 직접 읽음': 'CPU reads directly', '1칸 ×4096': '1 word ×4096', '1칸씩 내줌': 'One word at a time', 'CPU 묶여 4096번': 'CPU tied up ×4096', '4KiB': '4 KiB', '4KiB 채움': '4 KiB filled',
  '블록 7 → 프레임 9': 'Block 7 → frame 9', '명령 1번 · CPU 자유': '1 command · CPU free', '4KiB 직접': '4 KiB direct', 'RAM에 직접': 'Straight to RAM', '9 ← 디스크': '9 ← disk', '완료 인터럽트': 'Completion interrupt', '명령1·인터럽트1': '1 command·1 interrupt', '4KiB 준비': '4 KiB ready', '4KiB 받음': 'Got 4 KiB',
  'read 같음': 'Same read', 'read ×2': 'read ×2', 'NVMe/USB': 'NVMe/USB', 'NVMe 명령': 'NVMe command', 'NVMe 큐': 'NVMe queue', 'USB 전송': 'USB transfer', '데이터': 'Data',
  '계산 대기': 'Waiting to compute', 'I/O 대기': 'I/O wait', '읽는 중': 'Reading', 'CPU': 'CPU', '그사이 CPU 씀': 'Has the CPU', '완료 → A 깨움': 'Done → wake A', '끝남': 'Done', '깨어나 계속': 'Woke, continues',
  // Step 1
  'CPU가 직접 옮기기': 'The CPU copies',
  'CPU가 한 칸씩 옮기면 4KiB 내내 CPU가 묶인다': 'When the CPU copies one word at a time, it is tied up for the whole 4 KiB',
  '장치 컨트롤러는 데이터를 담는 작은 레지스터를 가지고 있습니다. 가장 단순한 방법은 드라이버(CPU)가 레지스터에서 한 칸씩 읽어 RAM에 옮기는 것입니다. 4KiB를 바이트 단위로 옮기면 4096번, 칸마다 "준비됐니?"까지 확인합니다. 그동안 CPU는 이 복사에만 매달립니다. 키보드처럼 데이터가 적은 장치에는 괜찮지만, 디스크나 네트워크처럼 많은 장치에는 낭비가 큽니다.':
    'A device controller has small registers that hold data. The simplest way is for the driver (the CPU) to read the register one word at a time and copy it into RAM. Moving 4 KiB byte by byte takes 4096 copies, each with a "ready?" check. Meanwhile the CPU does nothing but this copying. That is fine for a device with little data like a keyboard, but wasteful for devices with a lot, like disks and networks.',
  '드라이버에서 컨트롤러로 읽기가 가고, 컨트롤러에서 RAM까지 한 칸씩 옮겨 드라이버 이름표가 "CPU 묶여 4096번", RAM 이름표가 "4KiB 채움"이 됩니다.': 'The read goes from the driver to the controller and is copied one word at a time to RAM, so the driver\'s label becomes "CPU tied up ×4096" and RAM\'s "4 KiB filled".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 커널의 디스크 드라이버, RAM, 디스크 컨트롤러가 있습니다. 프로그램이 4KiB를 읽습니다.': 'The program is in user space on the left; across the boundary are the kernel\'s disk driver, RAM and the disk controller. The program reads 4 KiB.',
  'CPU가 컨트롤러 레지스터에서 한 칸씩': 'The CPU reads the controller register one word at a time', '4096번 확인하고 복사': 'Check and copy 4096 times', '그동안 CPU는 다른 일 못 함': 'Meanwhile the CPU can do nothing else',
  'read(fd, buf, 4096)': 'read(fd, buf, 4096)', '컨트롤러 레지스터를 직접 읽기로': 'Read the controller register directly', '준비됐니? → 1칸 읽기': 'Ready? → read one word', '4096번 되풀이': 'Repeat 4096 times', '4KiB가 RAM에 채워짐': '4 KiB filled into RAM',
  '프로그램의 read가 커널의 디스크 드라이버에 닿습니다.': 'The program\'s read reaches the kernel\'s disk driver.',
  'CPU가 컨트롤러에서 한 칸씩 4096번 읽어 옵니다.': 'The CPU reads from the controller one word at a time, 4096 times.',
  '4KiB가 RAM에 채워집니다. 그 내내 CPU는 다른 일을 하지 못했습니다.': '4 KiB is filled into RAM. The CPU could do nothing else the whole time.',
  'CPU가 4096번 복사하는 동안 다른 프로그램을 돌릴 수 있을까요?': 'Can other programs run while the CPU copies 4096 times?',
  '돌릴 수 있다': 'Yes', '돌릴 수 없다': 'No', '절반은 돌린다': 'Half the time',
  '복사는 CPU가 하는 일이라 그동안 CPU가 묶입니다. 데이터가 많을수록 낭비가 큽니다.': 'The copying is the CPU\'s work, so the CPU is tied up meanwhile. The more data, the bigger the waste.',
  // Step 2
  'DMA는 컨트롤러가 RAM에 직접 쓰고 다 되면 알려 준다': 'With DMA, the controller writes straight into RAM and reports when done',
  'DMA(직접 메모리 접근)를 쓰면 드라이버는 컨트롤러에 "블록 7을 RAM 프레임 9로 옮겨"라는 명령을 한 번만 보냅니다. 컨트롤러가 CPU를 거치지 않고 RAM에 직접 씁니다. 다 끝나면 1.3의 인터럽트로 CPU에 알립니다. CPU는 명령을 보낸 뒤부터 완료 인터럽트가 올 때까지 다른 일을 할 수 있습니다. 오늘날 디스크와 네트워크 카드는 모두 이렇게 동작합니다.':
    'With DMA (direct memory access), the driver sends the controller a single command: "move block 7 into RAM frame 9". The controller writes straight into RAM without going through the CPU. When it is done it tells the CPU with an interrupt, as in 1.3. From sending the command until the completion interrupt, the CPU can do other work. Today\'s disks and network cards all work this way.',
  '드라이버 이름표가 "명령 1번 · CPU 자유"가 되고, 컨트롤러에서 RAM으로 바로 데이터가 가 컨트롤러 이름표가 "RAM에 직접", RAM 이름표가 "9 ← 디스크"(프레임 9)가 됩니다. 컨트롤러의 인터럽트로 드라이버 이름표가 "명령1·인터럽트1"(CPU가 한 일은 이 둘뿐)이 됩니다.':
    'The driver\'s label becomes "1 command · CPU free"; data goes straight from the controller to RAM, the controller\'s label becomes "Straight to RAM" and RAM\'s "9 ← disk" (frame 9). With the controller\'s interrupt, the driver\'s label becomes "1 command·1 interrupt" (all the CPU did).',
  '1단계와 같은 정거장입니다. 이번에는 드라이버가 컨트롤러에 DMA 명령을 한 번 보냅니다.': 'The same stations as step 1. This time the driver sends the controller one DMA command.',
  '드라이버: "블록 7 → 프레임 9" 명령 1번': 'Driver: one command "block 7 → frame 9"', '컨트롤러가 RAM에 직접 씀': 'The controller writes straight into RAM', '완료 인터럽트': 'Completion interrupt', '그동안 CPU는 자유': 'Meanwhile the CPU is free',
  'DMA 명령 준비': 'Prepare a DMA command', '블록 7 → RAM 프레임 9': 'Block 7 → RAM frame 9', '명령 1번을 받음': 'Receives one command', '컨트롤러가 프레임 9에 직접 씀': 'The controller writes straight into frame 9', 'CPU를 거치지 않음': 'Not through the CPU', '인터럽트로 완료를 알림': 'Reports completion with an interrupt', 'read가 돌아옴': 'read returns',
  '드라이버가 컨트롤러에 명령을 한 번 보내고 손을 뗍니다.': 'The driver sends the controller one command and lets go.',
  '컨트롤러가 CPU를 거치지 않고 RAM 프레임 9에 4KiB를 씁니다.': 'The controller writes 4 KiB into RAM frame 9 without going through the CPU.',
  '다 쓰고 나면 컨트롤러가 인터럽트로 CPU에 알립니다.': 'When it is done writing, the controller tells the CPU with an interrupt.',
  '드라이버가 마무리하고 프로그램의 read가 돌아옵니다.': 'The driver finishes up and the program\'s read returns.',
  'DMA에서 데이터를 RAM에 옮기는 것은 누구일까요?': 'With DMA, who moves the data into RAM?',
  '컨트롤러가 메모리 버스로 RAM에 직접 씁니다. CPU는 처음 명령과 마지막 인터럽트만 맡습니다.': 'The controller writes straight into RAM over the memory bus. The CPU handles only the first command and the final interrupt.',
  // Step 3
  '드라이버가 감춤': 'The driver hides it',
  '같은 read가 드라이버를 거쳐 장치마다 다른 명령이 된다': 'The same read becomes a different command for each device through the driver',
  '프로그램은 NVMe SSD에서 읽든 USB 메모리에서 읽든 똑같이 read를 부릅니다. 장치마다 다른 명령 형식은 커널의 드라이버가 맡습니다. NVMe 드라이버는 명령을 큐에 넣고, USB 드라이버는 USB 전송으로 바꿉니다. 그래서 새 장치가 나와도 드라이버만 있으면 프로그램은 바뀌지 않습니다. 리눅스 커널 코드의 상당 부분이 이런 드라이버입니다.':
    'A program calls read the same way whether it reads an NVMe SSD or a USB stick. Each device\'s own command format is handled by the kernel\'s driver. The NVMe driver puts commands in a queue, and the USB driver turns them into USB transfers. So when a new device comes out, programs need no change as long as there is a driver. A large part of the Linux kernel\'s code is drivers like these.',
  '프로그램 이름표가 "read 같음"이고, 드라이버 이름표가 "NVMe/USB"(장치마다 다른 명령)가 됩니다. 두 장치 이름표가 각각 "NVMe 큐", "USB 전송"이 됩니다.': 'The program\'s label reads "Same read", and the driver\'s becomes "NVMe/USB" (a different command per device). The two devices\' labels become "NVMe queue" and "USB transfer".',
  '왼쪽 사용자 영역에 프로그램이, 경계 너머에 커널의 드라이버, NVMe SSD, USB 메모리가 있습니다. 프로그램이 두 장치에서 같은 read를 부릅니다.': 'The program is in user space on the left; across the boundary are the kernel\'s drivers, an NVMe SSD and a USB stick. The program calls the same read on both devices.',
  '프로그램: read(ssd) · read(usb) 똑같이': 'Program: read(ssd) · read(usb), the same', '드라이버가 장치마다 다른 명령으로': 'The driver turns it into each device\'s command', 'NVMe 큐 · USB 전송': 'NVMe queue · USB transfer',
  'read(ssd의 파일)': 'read(file on ssd)', 'read(usb의 파일)': 'read(file on usb)', '장치 종류를 보고 명령을 고름': 'Choose the command by device type', '제출 큐에 읽기 명령': 'Read command into the submission queue', 'USB 대용량 저장 명령': 'USB mass-storage command', '두 read 모두 데이터를 받음': 'Both reads get data',
  '두 read 모두 커널의 드라이버 층에 닿습니다.': 'Both reads reach the kernel\'s driver layer.',
  'NVMe 드라이버가 SSD의 명령 큐에 읽기를 넣습니다.': 'The NVMe driver puts a read into the SSD\'s command queue.',
  'USB 드라이버는 같은 읽기를 USB 전송으로 바꿔 보냅니다.': 'The USB driver turns the same read into a USB transfer.',
  '프로그램은 두 장치에서 똑같이 데이터를 받습니다.': 'The program gets data from both devices the same way.',
  '프로그램은 장치마다 다른 명령을 알아야 할까요?': 'Does the program need to know each device\'s commands?',
  '알아야 한다': 'Yes', '몰라도 된다': 'No', 'USB만 알면 된다': 'Only USB\'s',
  '장치마다 다른 명령은 드라이버가 감춥니다. 프로그램은 read 하나만 씁니다.': 'The driver hides each device\'s commands. The program uses just read.',
  // Step 4
  '기다리는 동안': 'While waiting',
  '디스크를 기다리는 동안 CPU는 다른 프로세스를 돌린다': 'While waiting for the disk, the CPU runs another process',
  '프로세스 A가 디스크 읽기를 요청하면 데이터가 올 때까지 할 일이 없습니다. 커널은 A를 I/O 대기 상태로 재우고(ps에서 D), 그 사이 CPU를 계산할 일이 있는 프로세스 B에 줍니다. DMA가 끝나 완료 인터럽트가 오면 커널이 A를 깨워 다시 실행 줄에 넣습니다. top의 wa(iowait) 값은 CPU가 할 일이 없어 I/O만 기다린 시간의 비율입니다.':
    'When process A requests a disk read, it has nothing to do until the data arrives. The kernel puts A to sleep in I/O wait (D in ps) and meanwhile gives the CPU to process B, which has computing to do. When DMA finishes and the completion interrupt arrives, the kernel wakes A and puts it back in the run queue. The wa (iowait) value in top is the share of time the CPU had nothing to do but wait for I/O.',
  'A의 read가 드라이버로 가 A 이름표가 "I/O 대기"(잠듦)가 되고, 드라이버에서 B로 CPU가 가 B 이름표가 "그사이 CPU 씀"이 됩니다. 디스크의 완료 인터럽트로 드라이버 이름표가 "완료 → A 깨움"이 됩니다.':
    'A\'s read goes to the driver and A\'s label becomes "I/O wait" (asleep); the CPU goes from the driver to B, whose label becomes "Has the CPU". With the disk\'s completion interrupt, the driver\'s label becomes "Done → wake A".',
  '왼쪽 사용자 영역에 프로세스 A와 B가, 경계 너머에 커널의 드라이버와 디스크 컨트롤러가 있습니다. A는 디스크를 읽고, B는 계산할 일이 있습니다.': 'Processes A and B are in user space on the left; across the boundary are the kernel\'s driver and the disk controller. A reads the disk, and B has computing to do.',
  'A: read → 디스크 기다림 (D 상태)': 'A: read → waits for the disk (D state)', '그사이 CPU는 B 실행': 'Meanwhile the CPU runs B', '완료 인터럽트 → A 깨움': 'Completion interrupt → wake A',
  'A: 디스크 읽기': 'A: disk read', 'B: 계산할 일 있음': 'B: has computing to do', 'DMA 명령을 보내고 A를 재움': 'Send the DMA command and put A to sleep', 'B가 CPU를 받아 계산': 'B gets the CPU and computes', '읽기 끝 · A를 깨움': 'Read done · wake A', 'A가 실행 줄로 돌아감': 'A returns to the run queue',
  'A가 read를 부르자 드라이버가 DMA 명령을 보내고 A를 재웁니다.': 'When A calls read, the driver sends the DMA command and puts A to sleep.',
  '디스크가 일하는 동안 CPU는 B에게 갑니다.': 'While the disk works, the CPU goes to B.',
  '디스크 읽기가 끝나 완료 인터럽트가 옵니다. 커널이 A를 깨웁니다.': 'The disk read finishes and the completion interrupt arrives. The kernel wakes A.',
  'A는 실행 줄로 돌아가 차례가 오면 데이터를 받아 계속합니다.': 'A goes back to the run queue and, when its turn comes, gets the data and continues.',
  'A가 디스크를 기다리는 동안 CPU는 무엇을 할까요?': 'What does the CPU do while A waits for the disk?',
  'A를 기다리며 쉰다': 'It rests, waiting for A', 'B를 실행한다': 'It runs B', '디스크를 돕는다': 'It helps the disk',
  'A는 잠들어 실행 줄에서 빠집니다. 스케줄러는 실행할 수 있는 B에 CPU를 줍니다.': 'A sleeps and leaves the run queue. The scheduler gives the CPU to B, which can run.',
};
