
<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<div class="config">
	<ul class="title">
		<li class="on">网络</li>
		<li>阈值设置</li>
		<li>配置审计</li>
	</ul>
	<ul class="content">
		<li class="show">
			<ul>
				<li>
					<input type="checkbox" checked="checked"/>网络容量
				</li>
				<li>
					<input type="checkbox"/ checked="checked">单机性能
				</li>
				<li>
					<input type="checkbox"/ checked="checked">拓扑计算
				</li>
				<li>
					<input type="checkbox"/ checked="checked">网络容量
				</li>
				<li>
					<input type="checkbox"/ checked="checked">端口评估
				</li>
			</ul>
		
		</li>
		<li>
			<ul class="content2">
					<li class="on">网络流量</li>
					<li>容量评估</li>
					<li>流量设置</li>					
			</ul>
			<ul class='content2-right'>
					<li class='show'>
						<ul>
							<li>
								内存占有率:<input type="text"/>
								
							</li>
							<li>
								阈值设置:<input type="text"/>
								
							</li>
							<li>
								丢包率:<input type="text"/>
							</li>
						</ul>
					</li>
					<li><div id='slider'></div></li>
					<li>流量设置content2-right</li>	
			</ul>
			
		</li>
		<li>
			<div class='askData'>
					<ul>
						<li class="text1 on">
							网络
						</li>
						<li class="text2">
							阈值
						</li>
						<li class="text3">
							丢包
						</li>
						<li class="text4">
							评估
						</li>
						<li class="text5">
							端口
						</li>
					</ul>
					<div class="aslDataContent">
							
					</div>
			</div>
			
			
		</li>
	</ul>
	
	<div class="startAssument">
		开始评估
	</div>
</div>

<div class="process">
	  <table id="theGrid" ></table>
   	  
</div>

<div class="reuslt">
	
		<ul class="resultTable">
			<li class="on">数据分析</li>
			<li>流量评估</li>
			<li>配置审计</li>
		</ul>
		<ul class="resultContent">
			<li class="on">
					<h3 class="DetailedTitle">
						网络质量结果
					</h3>
					<div class="anlyseTop">
					
						<div class="score">
							92
						</div>
						<div id="anlyseCircle">
						
						</div>
						<table id="theGrid2"></table>
						
					</div>
					<h3 class="DetailedTitle">
						网络安全结果
					</h3>
					<div id="anlysetool">
					
					</div>
					
					<h3 class="DetailedTitle">
						详细评估结果
					</h3>
					<ul class="DetailedContent">
						<li>网络评估</li>
						<li>丢包率阈值</li>
						<li>网络安全</li>
						<li>流量评估</li>
						<li>运维管理</li>
					</ul>
			
			</li>
			<li></li>
			<li></li>
		</ul>
		
</div>
