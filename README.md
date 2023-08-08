# DROW-Dashboard-React

## Getting started

### 2023-07-19 덱시브 기술 연계 및 제주 데이터 구축 회의

- 덱시브 및 클로버 업무 연계

```
1. 인도네시아 시연 장소 결정 (비행 허가 안나거나 비행불가 장소가 있음, 로얄그룹에 맞추어 생각하는 것이 있는지,)
2. 스마트빌딩? 등 덱시브 사전에 데이터구축해둔 구역장소의 3dtiles데이터 부터 넘겨받아 사전 작업 수행 예정
3. 덱시브는 제주 공간정보 이미 구축되어있고, 제주 전체 데이터는 80만컷정도되어 전체를 타일화하면 몇달 걸릴 것 -> 전체데이터로 시연 하기는 불가능
4. 따라서 장소 결정되면 그 범위로 데이터를 구축
5. 위 장소 데이터 구축위한 매핑기체 및 시연기체(APM/PX4/DJI) 클로버것? 덱시브? 확인 필요, 클로버이면 매핑 및 시연 비행시 현장팀 안전상 같이 참여 요청
6. 데이터 구축 및 시연 사전 테스트 일정
7. NDA 빠르게 요청
8. 분석결과 연계는 덱시브측 분석결과 웹링크 받으면 그쪽으로 관제플랫폼에서 리다이렉션하는 식으로 표출하도록 권유함 (현재 페이지개발 통합하기 어려움)
```

- 대표님 의견

1. 시연장소 결정 예정
2. 스마트빌딩은 하지 않고 일부 비행 구역 예정 3d 타일화 받아주세요
3. 일부 영역만
4. 덱시브링 하는 것은 dJI 만
5. 8/14-8/16예정
6. OK

- 실시간은 관제비행운용, 다기종 시연 중점
- 그룹 시연 장소 결정이 아직 예정 (결정시 공유해드리겠습니다)
- 데이터 구축 장소는 스마트빌딩 말고 덱시브분들께서 좋은 곳, 쉽게 되는 곳, 구축이 되어있는 곳으로 으로 수행
- 해당 비행에 기체는 덱시브사 dji기체 등으로 하시면 될 듯하며 가능하신 일정으로 위 장소 데이터구축 및 3d tiles export하여 주시면 저희가 말씀드렸던 이후 작업 수행

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://gitlab.com/clrobur.lab/drow-dashboard-react.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://gitlab.com/clrobur.lab/drow-dashboard-react/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing(SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

---

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thank you to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name

Choose a self-explaining name for your project.

## Description

Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges

On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals

Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation

Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage

Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support

Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing

State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment

Show your appreciation to those who have contributed to the project.

## License

For open source projects, say how it is licensed.

## Project status

If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
