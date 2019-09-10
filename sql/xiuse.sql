set names utf8;
Drop database if exists xiuse;
create database xiuse charset=utf8;
use xiuse;
#用户
create table xs_user(
    uid int primary key auto_increment,
    uname varchar(30),
    upwd varchar(30)
);
insert into xs_user(uid,uname,upwd) values (null,"lisi","123456");
insert into xs_user(uid,uname,upwd) values (null,"zhangsan","123456");
insert into xs_user(uid,uname,upwd) values (null,"wangwu","123456");
#外键所在表要放在主键所在表的下面
#浏览记录表
create table xs_scanned(
    id int primary key auto_increment,
    hid int,
    hallBg_src varchar(100),
    hallRanking_src varchar(100),
    RankIcon_src varchar(100),
    sign varchar(50),
    watchIcon_src varchar(100),
    watchNum bigint,
    fid int,
    foreign key(fid) references xs_user(uid)
);
#大厅
create table hall(
    id int primary key auto_increment,
    hallBg_src varchar(100),
    hallRanking_src varchar(100),
    RankIcon_src varchar(100),
    sign varchar(50),
    watchIcon_src varchar(100),
    watchNum bigint,
    subscription bigint,
    roomNum varchar(10)
);

insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,2000,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,3000,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,1500,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,100000,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,9000,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,100,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,3200,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,4000,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,7000,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,700,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,5000,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,500,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,6000,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,600,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,4500,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,453,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,230,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,7500,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,12,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,3,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,10,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,900,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,910,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,2900,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,1900,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,1800,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,3780,"7039677");
insert into hall(id,hallBg_src,hallRanking_src,RankIcon_src,sign,watchIcon_src,watchNum,subscription,roomNum) values (null,"//127.0.0.1:7000/img/b127f14ce1_250_350.jpg","//127.0.0.1:7000/img/red_packet_gf5.png","//127.0.0.1:7000/img/friend_dp_all.png","放开那个女孩","//127.0.0.1:7000/img/hall_anchor_audience.png",1000,4780,"7039677");


  
#护卫队
create table guard(
    id int primary key auto_increment,
    avatar varchar(100),
    guardName varchar(2),
    rankingOne varchar(100),
    rankingTwo varchar(100),
    fight bigint,
    nameBg varchar(100)
);
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86247,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86147,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86047,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",85247,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",85147,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",85047,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",84947,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",84847,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",84747,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",96247,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",95247,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",97247,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",94247,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",93247,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",93247,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",91247,"//127.0.0.1:7000/img/armybackground80_99.png");
insert into guard (id,avatar,guardName,rankingOne,rankingTwo,fight,nameBg) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",90247,"//127.0.0.1:7000/img/armybackground80_99.png");
#根据贡献值的女神榜
create table goddess(
    id int primary key auto_increment,
    avatar varchar(100),
    guardName varchar(2),
    rankingOne varchar(100),
    rankingTwo varchar(100),
    contribute bigint,
    nameBg varchar(100),
    sign varchar(30)
);
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86247,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86147,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86047,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86247,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86347,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86447,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86547,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86647,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86747,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86847,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",86947,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",87147,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",87947,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",87847,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",88947,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");
insert into goddess(id,avatar,guardName,rankingOne,rankingTwo,contribute,nameBg,sign) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg","名牌","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png","//127.0.0.1:7000/img/showself_team_teamlevel_num_9.png",88847,"//127.0.0.1:7000/img/armybackground80_99.png","小爱同学今天生日了，一定要庆祝哦");

#靓照
create table photo(
    id int primary key auto_increment,
    img_src varchar(100)
);
insert into photo(id,img_src) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg");
insert into photo(id,img_src) values (null,"//127.0.0.1:7000/img/69ded6a598_250_350.jpg");





