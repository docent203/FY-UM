from django.shortcuts import render, HttpResponse
from django.shortcuts import render
from rest_framework import viewsets
# from .serializers import paintingSerializer
# from .models import painting
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .recomed import rec,check
from .models import Recommend,Member,Masterpiece,Wishlist
import jwt



# Create your views here.
# @api_view(['GET'])
# def get_recom_paintings(request, p_id):
#     temp_painting = painting.objects.get(id=p_id)
#     tserializer = paintingSerializer(temp_painting)
#     return Response(tserializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def get_recom_paintings(request):
    ids = request.GET.get('ids', '')  # ids 매개변수가 없을 경우 기본값은 빈 문자열('')로 설정합니다.
    id_list = [int(id) for id in ids.split(',') if id]
    #p_id 로 그림 추천하기
    #리스트에 담기
    res = []
    for i in id_list:
        print(i)
        for j in rec(i):
            res.append([j,check(j)]) #그림 아이디 받을거니까 -1 해줘야 할듯******
    '''설문응답 받는 동시에 저장'''
    auth_header = request.META.get('HTTP_AUTHORIZATION')
    memid = 6;
    if auth_header:
        jwt_token = auth_header.split()[1]
        print(jwt_token)
        privatekey = "picaso"
        decode = jwt.decode(jwt_token, options={"verify_signature": False})
        memid = decode["id"]
        pass
    else:
        print('no')
        pass
    print(res)
    member = Member.objects.get(kakao_id=memid)
    print(Masterpiece.objects.all())
    painting1 = Masterpiece.objects.get(id=res[0][0])
    painting2 = Masterpiece.objects.get(id=res[1][0])
    painting3 = Masterpiece.objects.get(id=res[2][0])
    painting4 = Masterpiece.objects.get(id=res[3][0])
    painting5 = Masterpiece.objects.get(id=res[4][0])
    painting6 = Masterpiece.objects.get(id=res[5][0])
    painting7 = Masterpiece.objects.get(id=res[6][0])
    painting8 = Masterpiece.objects.get(id=res[7][0])
    painting9 = Masterpiece.objects.get(id=res[8][0])
    painting10 = Masterpiece.objects.get(id=res[9][0])
    
    recommend = Recommend(member = member,
                          painting1 = painting1,
                          painting2 = painting2,
                          painting3 = painting3,
                          painting4 = painting4,
                          painting5 = painting5,
                          painting6 = painting6,
                          painting7 = painting7,
                          painting8 = painting8,
                          painting9 = painting9,
                          painting10 = painting10,
                          )
    recommend.save()
    
    
    #설문 응답 저장하고
    
    
    #추천된 그림 저장
    
    #응답 보내기
    return Response(status=status.HTTP_200_OK)

@api_view(['GET'])
def CF_recommed(request):
    
    auth_header = request.META.get('HTTP_AUTHORIZATION')
    memid = 6;
    if auth_header:
        jwt_token = auth_header.split()[1]
        print(jwt_token)
        privatekey = "picaso"
        decode = jwt.decode(jwt_token, options={"verify_signature": False})
        memid = decode["id"]
        pass
    else:
        print('no')
        pass
    #사용자 정보 데이터베이스에서 가져오기
    member = Member.objects.get(kakao_id=memid)

    
    rows = Member.objects.count()
    Qset = Member.objects.all()
    Qlist = list(Qset)
    memberidlist = [i.pk for i in Qlist]
    
    value = [[] for i in range(rows)] # 각 사용자의 찜목록에 있는 그림 id
    
    for i in range(rows):
        print(Qlist[i].pk)
        te = Wishlist.objects.filter(member_id = Qlist[i].pk)
        tlist = list(te)
        for j in tlist:
            value[i].append(j.painting.pk)
        print(value[i])
    
    #자카드계수 행렬 만들 빈 리스트
    arr = [[0 for j in range(rows)] for i in range(rows)]
    
    #자카드 계수 행렬에 저장
    for i in range(rows):
        for j in range(rows):
            if(value[i] == [] or value[j] == [] or i == j):
                arr[i][j] = 0
            else:
                arr[i][j] = jaccard_sim(value[i],value[j])
    
    print(arr)
    # 원하는 유저의 arr에서의 idx 구하기
    theidx = memberidlist.index(member.pk) #나중에 요청온 사용자로 바꿔주기 0-------------------사용자
    print(arr[theidx])
    
    #자카드 유사도가 높은순으로 10명의 arr 인덱스 번호
    scores = list(enumerate(arr[theidx]))
    print(scores)
    scores = sorted(scores, key=lambda x: x[1], reverse=True)
    scores = scores[0:10]
    recomend = [idx[0] for idx in scores]
    print(scores)
    print(recomend)
    
    
    #선정된 10명의 찜 목록에서 사용자의 찜 목록에 없는 그림id만 리스트에 담기
    rcomlist = []
    for i in recomend:
        set1 = set(value[i])
        set2 = set(value[theidx])
        setF = set1.difference(set2)
        
        rcomlist.extend(list(setF))
    
    rcomlist = list(set(rcomlist))    
    print(rcomlist)
    
    #만약 rcomlist 가 10개가 안된다면 원래 추천 리스트에 있었던 그림 추가
    if(len(rcomlist) < 10):
        recommend = Recommend.objects.get(member_id = member.pk)#pk ----------------------사용자
        rcomlist.append(recommend.painting1.pk)
        rcomlist.append(recommend.painting2.pk)
        rcomlist.append(recommend.painting3.pk)
        rcomlist.append(recommend.painting4.pk)
        rcomlist.append(recommend.painting5.pk)
        rcomlist.append(recommend.painting6.pk)
        rcomlist.append(recommend.painting7.pk)
        rcomlist.append(recommend.painting8.pk)
        rcomlist.append(recommend.painting9.pk)
        rcomlist.append(recommend.painting10.pk)
    print(rcomlist)      
    rcomlist = list(set(rcomlist)) # 혹시 같은거 지워주고
    print(rcomlist)
    rcomlist = rcomlist[0:10] #10개로 자르고
    print(rcomlist)
    
    #새로운 추천 리스트를 데이터베이스에 저장
    
    painting1 = Masterpiece.objects.get(id=rcomlist[0])
    painting2 = Masterpiece.objects.get(id=rcomlist[1])
    painting3 = Masterpiece.objects.get(id=rcomlist[2])
    painting4 = Masterpiece.objects.get(id=rcomlist[3])
    painting5 = Masterpiece.objects.get(id=rcomlist[4])
    painting6 = Masterpiece.objects.get(id=rcomlist[5])
    painting7 = Masterpiece.objects.get(id=rcomlist[6])
    painting8 = Masterpiece.objects.get(id=rcomlist[7])
    painting9 = Masterpiece.objects.get(id=rcomlist[8])
    painting10 = Masterpiece.objects.get(id=rcomlist[9])
    
    newRecommend = Recommend(member = member,
                          painting1 = painting1,
                          painting2 = painting2,
                          painting3 = painting3,
                          painting4 = painting4,
                          painting5 = painting5,
                          painting6 = painting6,
                          painting7 = painting7,
                          painting8 = painting8,
                          painting9 = painting9,
                          painting10 = painting10,
                          )
    newRecommend.save()
    
    
    
    return Response(status=status.HTTP_200_OK)


def jaccard_sim(list1, list2):
    s1 = set(list1)
    s2 = set(list2)
    return float(len(s1.intersection(s2))/len(s1.union(s2)))